import { useEffect, useRef } from 'react';
import { useAnimationState } from './AnimationContext';

// Simplified SSE hook using centralized AnimationContext
export function usePlusSSE(guideType) {
  const eventSourceRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const {
    startChatStartedSequence,
    startIntentionExtractedSequence,
    startChatCompletedSequence,
    setIsSSEConnected
  } = useAnimationState();

  // Store the currently active agents for completion sequence
  const activeAgentsRef = useRef([]);

  // Handle SSE messages
  const handleSSEMessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log('[SSE] Received message:', data);

      // Filter by guide type
      if (data.data?.guide && data.data.guide !== guideType) {
        console.log(`[SSE] Ignoring event for ${data.data.guide}, current guide: ${guideType}`);
        return;
      }

      switch (data.type) {
        case 'chat_started': {
          // Reset and start the chat_started animation sequence
          const { message: userMessage } = data.data;
          // resetAll() removed - startChatStartedSequence handles reset internally
          activeAgentsRef.current = []; // Clear previous active agents
          setTimeout(() => {
            startChatStartedSequence(userMessage);
          }, 100);
          break;
        }

        case 'intention_extracted': {
          const { agents, intention } = data.data;

          // Filter out 'orchestrator' as it's not a sub-agent
          const subAgents = (agents || []).filter(agent => agent !== 'orchestrator');

          // Store the active agents for completion sequence
          activeAgentsRef.current = subAgents;

          // Only start intention loop if there are sub-agents to activate
          if (subAgents.length > 0) {
            setTimeout(() => {
              startIntentionExtractedSequence(subAgents, intention);
            }, 100);
          }
          // For general inquiry (orchestrator only), animation stays at orchestrator processing
          // and waits for chat_completed event
          break;
        }

        case 'chat_completed':
          // Start the completion animation sequence
          setTimeout(() => {
            startChatCompletedSequence();
          }, 100);
          break;

        case 'heartbeat':
          // Keep connection alive
          break;

        case 'connected':
          // SSE Connected successfully
          break;

        default:
          // Unknown message type
      }
    } catch {
      // Error parsing SSE message
    }
  };

  const connectSSE = () => {
    try {

      // Determine backend URL based on environment
      const isDevelopment = window.location.hostname === 'localhost';
      const backendUrl = isDevelopment
        ? 'http://localhost:8080/stream'
        : 'https://w2dpn8shpq.ap-southeast-2.awsapprunner.com/stream';

      eventSourceRef.current = new EventSource(backendUrl);

      eventSourceRef.current.onopen = () => {
        console.log('[SSE] Connection opened to:', backendUrl);
        setIsSSEConnected(true);
        if (reconnectTimeoutRef.current) {
          clearTimeout(reconnectTimeoutRef.current);
          reconnectTimeoutRef.current = null;
        }
      };

      eventSourceRef.current.onmessage = handleSSEMessage;

      eventSourceRef.current.onerror = (error) => {
        console.log('[SSE] Connection error:', error);
        setIsSSEConnected(false);
        eventSourceRef.current?.close();

        // Attempt to reconnect almost immediately (50ms delay to prevent tight loop)
        reconnectTimeoutRef.current = setTimeout(() => {
          console.log('[SSE] Attempting to reconnect...');
          connectSSE();
        }, 50);
      };
    } catch {
      // Error setting up Plus SSE
    }
  };

  useEffect(() => {
    connectSSE();

    return () => {
      setIsSSEConnected(false);
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guideType]);

  return null;
}
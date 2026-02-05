import React from 'react';
import { getBezierPath, BaseEdge, MarkerType } from 'reactflow';

const CustomDirectionalEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  style = {}
}) => {
  // Get the path for the edge
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // Determine if this edge is active in forward or reverse direction
  const isForward = data?.direction === 'forward';
  const isReverse = data?.direction === 'reverse';
  const isBidirectional = data?.direction === 'bidirectional';
  const isActive = isForward || isReverse || isBidirectional;

  // Determine the edge color based on active state
  const edgeColor = isActive && data?.color ? data.color : '#8b92a0';  // Slightly brighter default

  // Configure markers based on direction
  const getMarkerEnd = () => {
    if (isForward || isBidirectional) {
      return {
        type: MarkerType.ArrowClosed,
        color: edgeColor,
        width: 20,
        height: 20
      };
    }
    return undefined;
  };

  const getMarkerStart = () => {
    if (isReverse || isBidirectional) {
      return {
        type: MarkerType.ArrowClosed,
        color: edgeColor,
        width: 20,
        height: 20
      };
    }
    return undefined;
  };

  // Style for the edge - solid when animated, dotted otherwise
  const edgeStyle = {
    ...style,
    stroke: edgeColor,
    strokeWidth: isActive ? 4 : 1.5,  // Much thicker when active (4px for pulse to fit inside)
    opacity: isActive ? 1 : 0.5,  // More visible when inactive
    strokeDasharray: (isActive && data?.animated) ? 'none' : '5 5',  // Solid when animated, dotted otherwise
    animation: 'none'  // No dash animation
  };

  return (
    <>
      {/* Define the path with an id for animation reference */}
      <defs>
        <path id={`path-${id}`} d={edgePath} fill="none" />
      </defs>

      <BaseEdge
        id={id}
        path={edgePath}
        style={edgeStyle}
        markerEnd={getMarkerEnd()}
        markerStart={getMarkerStart()}
      />

      {/* Animated rectangular pulses flowing inside the edge */}
      {isActive && data?.animated && (
        <g>
          {/* Gradient definition for pulse fade effect */}
          <defs>
            <linearGradient id={`pulse-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="30%" stopColor="white" stopOpacity="0.9" />
              <stop offset="70%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Animated pulses centered on edge */}
          {(isForward || isReverse) && edgePath && (
            <>
              {/* First pulse */}
              <rect width="20" height="4" fill={`url(#pulse-gradient-${id})`} rx="1" x="-10" y="-2" opacity="0">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  keyPoints={isReverse ? "1;0" : "0;1"}
                  keyTimes="0;1"
                  path={edgePath}
                  rotate="auto"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;1;0"
                  keyTimes="0;0.1;0.3;0.7;0.9;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Second pulse with delay */}
              <rect width="20" height="4" fill={`url(#pulse-gradient-${id})`} rx="1" x="-10" y="-2" opacity="0">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  keyPoints={isReverse ? "1;0" : "0;1"}
                  keyTimes="0;1"
                  path={edgePath}
                  rotate="auto"
                  begin="1s"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;1;1;1;0"
                  keyTimes="0;0.1;0.3;0.7;0.9;1"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </rect>
            </>
          )}
        </g>
      )}
      {/* Optional: Add a label if needed */}
      {data?.label && (
        <text
          x={labelX}
          y={labelY}
          style={{
            fontSize: 10,
            fill: edgeColor,
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          textAnchor="middle"
          dy={-5}
        >
          {data.label}
        </text>
      )}
    </>
  );
};

export default CustomDirectionalEdge;
import React from 'react';
import { Handle, Position } from 'reactflow';
import plusIcon from './assets/SVG/SC25_PLUS_Plus.svg';
import userIcon from './assets/SVG/SC25_PLUS_User.svg';
import userContextIcon from './assets/SVG/SC25_PLUS_User context.svg';
import knowledgeIcon from './assets/SVG/SC25_PLUS_Knowledge.svg';
import mytaskIcon from './assets/SVG/SC25_PLUS_MyTask.svg';
import leaveIcon from './assets/SVG/SC25_PLUS_Leave.svg';
import analyticsIcon from './assets/SVG/SC25_PLUS_Analytics.svg';
import workreqIcon from './assets/SVG/SC25_PLUS_Work Req.svg';
import requisitionIcon from './assets/SVG/SC25_PLUS_Requsition.svg';
import recruitmentIcon from './assets/SVG/SC25_PLUS_Recruitment.svg';
import emailIcon from './assets/SVG/SC25_PLUS_Email.svg';
import dxpLogo from './assets/SVG/SC25_PLUS_DXP.svg';
import ciaLogo from './assets/SVG/SC25_PLUS_CiA.svg';
import studentmanagementIcon from './assets/SVG/SC25_PLUS_StudentManagement.svg';
import bincollectionsIcon from './assets/SVG/SC25_PLUS_BinCollections.svg';
import communityeventsIcon from './assets/SVG/SC25_PLUS_CommunityEvents.svg';
import requestIcon from './assets/SVG/SC25_PLUS_RequestManagement.svg';
import spatialIcon from './assets/SVG/SC25_PLUS_Spatial.svg';
import counciltaxIcon from './assets/SVG/SC25_PLUS_CouncilTax.svg';
import thirdPartyIcon from './assets/SVG/SC25_PLUS_3rdParty.svg';

// Inline Finance SVG icon (temporary until asset is provided)
const FinanceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L12 22M17 6C17 6 15 4 12 4C9 4 7 5 7 7.5C7 10 9 11 12 11C15 11 17 12 17 14.5C17 17 15 18 12 18C9 18 7 16 7 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"/>
  </svg>
);

// Icon mapping for tier 2 nodes
const tier2IconMap = {
  'mytask': mytaskIcon,
  'knowledge': knowledgeIcon,
  'leave': leaveIcon,
  'analytics': analyticsIcon,
  'finance': FinanceIcon,
  'workrequest': workreqIcon,
  'requisition': requisitionIcon,
  'recruitment': recruitmentIcon,
  'email': emailIcon,
  'studentmanagement': studentmanagementIcon,
  'StudentManagement': studentmanagementIcon,
  'Knowledge': knowledgeIcon,
  'bincollections': bincollectionsIcon,
  'communityevents': communityeventsIcon,
  'request': requestIcon,
  'spatial': spatialIcon,
  'taxtransactions': counciltaxIcon
};

// Custom node component with bidirectional handles for proper edge animation
const CustomBidirectionalNode = React.memo(({ data, isConnectable }) => {
  const {
    label,
    fullName,
    icon,
    tier,
    active = false,
    processing = false,
    nodeType = 'agent',
    nodeMessage = '',
    dimmed = false
  } = data;


  // Determine node size based on tier - adjusted for vertical layout with smaller agents
  const getNodeDimensions = () => {
    switch (tier) {
      case 1:
        return { width: '100px', height: '90px', fontSize: '12px' };  // Square-like format for tier 1
      case 2:
        return { width: '70px', height: '70px', fontSize: '11px' };  // Square format for sub-agents
      case 3:
        return { width: '70px', height: '70px', fontSize: '10px' };  // Square format for tools
      default:
        return { width: '90px', height: '40px', fontSize: '11px' };
    }
  };

  const dimensions = getNodeDimensions();

  // Dynamic styles based on state with glass-morphism
  const isAIAgent = (data.label === 'Plus AI' || data.label === 'Student Guide' || data.label === 'Resident Guide') && tier === 1;

  const nodeStyle = {
    background: isAIAgent
      ? `linear-gradient(135deg, #974fff 0%, #000 100%)`
      : dimmed
      ? 'rgba(255, 255, 255, 0.02)'
      : active
      ? `linear-gradient(135deg,
          rgba(255, 255, 255, 0.15) 0%,
          rgba(255, 255, 255, 0.08) 100%)`
      : `linear-gradient(135deg,
          rgba(255, 255, 255, 0.08) 0%,
          rgba(255, 255, 255, 0.04) 100%)`,
    backdropFilter: isAIAgent ? 'none' : dimmed ? 'blur(4px)' : 'blur(12px) saturate(150%)',
    WebkitBackdropFilter: isAIAgent ? 'none' : dimmed ? 'blur(4px)' : 'blur(12px) saturate(150%)',
    border: isAIAgent
      ? '1px solid rgba(151, 79, 255, 0.3)'
      : tier >= 2
      ? dimmed
        ? '1px solid rgba(255, 255, 255, 0.03)'
        : active
        ? '1px solid rgba(255, 255, 255, 0.08)'
        : '1px solid rgba(255, 255, 255, 0.06)'
      : dimmed
        ? '1px solid rgba(255, 255, 255, 0.05)'
        : active
        ? '1px solid rgba(255, 255, 255, 0.25)'
        : '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: tier === 3 ? '10px' : '12px',
    padding: tier === 2 ? '8px 10px' : tier === 3 ? '8px 10px' : '6px 8px',
    color: dimmed ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.95)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif',
    fontSize: dimensions.fontSize,
    fontWeight: tier === 1 ? '500' : '400',
    letterSpacing: '0.02em',
    width: dimensions.width,
    height: dimensions.height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    boxShadow: tier >= 2
      ? dimmed
        ? `inset 1px 0 0 0 rgba(255, 255, 255, 0.15),
           inset 1px 1px 0 0 rgba(255, 255, 255, 0.15),
           inset 1px -1px 0 0 rgba(255, 255, 255, 0.15),
           inset 4px 1px 4px -4px rgba(255, 255, 255, 0.1),
           inset 4px -1px 4px -4px rgba(255, 255, 255, 0.1),
           inset -1px 0 0 0 rgba(255, 255, 255, 0.01),
           0 2px 6px rgba(0, 0, 0, 0.08)`
        : active
        ? `inset 1px 0 0 0 rgba(255, 255, 255, 0.4),
           inset 1px 1px 0 0 rgba(255, 255, 255, 0.4),
           inset 1px -1px 0 0 rgba(255, 255, 255, 0.4),
           inset 6px 1px 6px -6px rgba(255, 255, 255, 0.25),
           inset 6px -1px 6px -6px rgba(255, 255, 255, 0.25),
           inset -1px 0 0 0 rgba(255, 255, 255, 0.01),
           0 0 20px ${data.color || '#6b7280'}66,
           0 4px 16px rgba(0, 0, 0, 0.15)`
        : `inset 1px 0 0 0 rgba(255, 255, 255, 0.3),
           inset 1px 1px 0 0 rgba(255, 255, 255, 0.3),
           inset 1px -1px 0 0 rgba(255, 255, 255, 0.3),
           inset 5px 1px 5px -5px rgba(255, 255, 255, 0.2),
           inset 5px -1px 5px -5px rgba(255, 255, 255, 0.2),
           inset -1px 0 0 0 rgba(255, 255, 255, 0.04),
           0 2px 12px rgba(0, 0, 0, 0.1)`
      : dimmed
        ? '0 2px 8px rgba(0, 0, 0, 0.1)'
        : active
        ? `0 0 30px ${data.color || '#6b7280'}66,
           0 8px 32px rgba(0, 0, 0, 0.2),
           inset 0 0 0 1px rgba(255, 255, 255, 0.2)`
        : `0 4px 24px rgba(0, 0, 0, 0.15),
           inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'scale(1)',
    position: 'relative',
    opacity: dimmed ? 0.5 : 1,
    animation: (active && processing) ? 'nodePulseColor 2.5s ease-in-out infinite' : 'none',
    filter: dimmed ? 'grayscale(0.5)' : 'none'
  };

  // Handle styles - completely hidden but functional
  const handleStyle = {
    background: 'transparent',
    width: 8,               // Larger hit area for functionality
    height: 8,
    border: 'none',
    opacity: 0               // Completely invisible
  };


  return (
    <div style={nodeStyle}>
      {/* Handles for all tiers to support bidirectional flow */}
      {tier === 1 && (
        <>
          {/* User: needs source-right to connect to orchestrator and target-right for reverse flow */}
          {(data.label === 'User') && (
            <>
              <Handle
                type="source"
                position={Position.Right}
                id="source-right"
                style={{ ...handleStyle, right: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
              <Handle
                type="target"
                position={Position.Right}
                id="target-right"
                style={{ ...handleStyle, right: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
            </>
          )}

          {/* Digital Twin (usercontext): needs target-left to receive from orchestrator and source-left for reverse flow */}
          {(data.label === 'Digital Twin' || data.label === 'User Context') && (
            <>
              <Handle
                type="target"
                position={Position.Left}
                id="target-left"
                style={{ ...handleStyle, left: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
              <Handle
                type="source"
                position={Position.Left}
                id="source-left"
                style={{ ...handleStyle, left: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
            </>
          )}

          {/* Plus AI / Student Guide / Resident Guide: needs all handles for bidirectional flow and tier 2 connections */}
          {(data.label === 'Plus AI' || data.label === 'Student Guide' || data.label === 'Resident Guide') && (
            <>
              {/* Horizontal handles for tier 1 connections */}
              <Handle
                type="target"
                position={Position.Left}
                id="target-left"
                style={{ ...handleStyle, left: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
              <Handle
                type="source"
                position={Position.Right}
                id="source-right"
                style={{ ...handleStyle, right: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
              {/* Additional handles for reverse flow */}
              <Handle
                type="source"
                position={Position.Left}
                id="source-left"
                style={{ ...handleStyle, left: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
              <Handle
                type="target"
                position={Position.Right}
                id="target-right"
                style={{ ...handleStyle, right: -4, top: '50%' }}
                isConnectable={isConnectable}
              />
              {/* Bottom handles for tier 2 agent connections - fixed 20px spacing */}
              <Handle
                type="source"
                position={Position.Bottom}
                id="source-bottom"
                style={{ ...handleStyle, bottom: -5, left: '50%', transform: 'translateX(-50%)' }}
                isConnectable={isConnectable}
              />
              <Handle
                type="target"
                position={Position.Bottom}
                id="target-bottom"
                style={{ ...handleStyle, bottom: -5, left: '50%', transform: 'translateX(-50%)' }}
                isConnectable={isConnectable}
              />
            </>
          )}
        </>
      )}

      {tier === 2 && (
        <>
          <Handle
            type="target"
            position={Position.Top}
            id="target-top"
            style={{ ...handleStyle, top: -4, left: '50%', transform: 'translateX(-50%)' }}
            isConnectable={isConnectable}
          />
          <Handle
            type="source"
            position={Position.Bottom}
            id="source-bottom"
            style={{ ...handleStyle, bottom: -4, left: '50%', transform: 'translateX(-50%)' }}
            isConnectable={isConnectable}
          />
          {/* Additional handles for reverse flow - centered */}
          <Handle
            type="source"
            position={Position.Top}
            id="source-top"
            style={{ ...handleStyle, top: -4, left: '50%', transform: 'translateX(-50%)' }}
            isConnectable={isConnectable}
          />
          <Handle
            type="target"
            position={Position.Bottom}
            id="target-bottom"
            style={{ ...handleStyle, bottom: -4, left: '50%', transform: 'translateX(-50%)' }}
            isConnectable={isConnectable}
          />
        </>
      )}

      {tier === 3 && (
        <>
          <Handle
            type="target"
            position={Position.Top}
            id="target-top"
            style={{ ...handleStyle, top: -4, left: '50%', transform: 'translateX(-50%)' }}
            isConnectable={isConnectable}
          />
          {/* Handle for reverse flow back to tier 2 - centered */}
          <Handle
            type="source"
            position={Position.Top}
            id="source-top"
            style={{ ...handleStyle, top: -4, left: '50%', transform: 'translateX(-50%)' }}
            isConnectable={isConnectable}
          />
        </>
      )}

      {/* Node content - different layout for tier 1 vs tier 2/3 */}
      {tier === 1 ? (
        // Tier 1: Vertical layout with icon on top
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
            {icon === 'orchestrator' || label === 'Plus AI' ? (
              <img
                src={plusIcon}
                alt={label}
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  background: 'white',
                  padding: '4px'
                }}
              />
            ) : icon === 'user' ? (
              <img
                src={userIcon}
                alt="User"
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'  // Convert to white
                }}
              />
            ) : icon === 'context' ? (
              <img
                src={userContextIcon}
                alt="User Context"
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'  // Convert to white
                }}
              />
            ) : null}
          </div>
          <span style={{
            fontWeight: '600',
            fontSize: dimensions.fontSize,
            textAlign: 'center',
            lineHeight: '1.2',
            color: isAIAgent ? 'rgba(255, 255, 255, 0.95)' : undefined,
            textShadow: isAIAgent ? '0 1px 2px rgba(0, 0, 0, 0.5)' : undefined
          }}>
            {label}
          </span>
          {/* Message for tier 1 nodes */}
          {nodeMessage && active && (
            <div style={{
              fontSize: '8px',
              opacity: 0.9,
              marginTop: '4px',
              textAlign: 'center',
              color: '#fff',
              fontStyle: 'italic',
              animation: 'fadeInOut 0.5s ease-in-out',
              lineHeight: '1.2',
              maxWidth: '90%',
              maxHeight: '24px',  // Increased to accommodate 2 lines with 8px font and 1.2 line-height
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              wordWrap: 'break-word',
              whiteSpace: 'normal'
            }}>
              {nodeMessage}
            </div>
          )}
        </div>
      ) : tier === 3 && nodeType === 'tool' ? (
        // Tier 3 tools: Vertical layout with icon and label, both left-aligned (same padding as tier 2)
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '8px 10px', gap: '4px' }}>
          {/* Icon at top, left-aligned */}
          {(icon === 'SC25_PLUS_DXP' || fullName === 'DXP API') ? (
            <img
              src={dxpLogo}
              alt="DXP"
              style={{
                width: '20px',
                height: '14px',
                objectFit: 'contain'
              }}
            />
          ) : (icon === 'SC25_PLUS_CiA' || fullName === 'CiA Services' || fullName === 'Email System') ? (
            <img
              src={ciaLogo}
              alt="CiA"
              style={{
                width: '20px',
                height: '14px',
                objectFit: 'contain'
              }}
            />
          ) : (icon === 'SC25_PLUS_3rdParty' || fullName === 'Third Party') ? (
            <img
              src={thirdPartyIcon}
              alt="Third Party"
              style={{
                width: '20px',
                height: '14px',
                objectFit: 'contain'
              }}
            />
          ) : null}
          {/* Label below icon, left-aligned with margin to compensate for icon padding */}
          <div style={{
            fontWeight: '600',
            fontSize: '9px',
            lineHeight: 1.3,  // Increased from 1.1 for better readability
            textAlign: 'left',
            marginTop: '4px',  // Replace flex gap
            marginLeft: '4px',  // Add margin to visually align with icon content
            minHeight: '24px',  // Fixed height for 2 lines to prevent jumping
            display: 'block',
            backfaceVisibility: 'hidden',  // Fix subpixel rendering during scale
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)'  // Force GPU acceleration
          }}>
            {label}
          </div>
          {/* Message positioned below the label */}
          {nodeMessage && active && (
            <div style={{
              position: 'absolute',
              top: '80%',
              left: '14px',
              right: '10px',
              fontSize: '6px',
              opacity: 0.9,
              textAlign: 'left',
              color: '#fff',
              fontStyle: 'italic',
              animation: 'fadeInOut 0.5s ease-in-out',
              lineHeight: '1.2',
              maxWidth: '90%',
              maxHeight: '14px',  // Approximately 2 lines with 6px font and 1.2 line-height
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {nodeMessage}
            </div>
          )}
        </div>
      ) : (
        // Tier 2: Vertical layout with icon and label, both left-aligned
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '8px 10px', gap: '4px' }}>
          {/* Icon at top, left-aligned */}
          {tier2IconMap[icon] ? (
            typeof tier2IconMap[icon] === 'function' ? (
              <div style={{ width: '16px', height: '16px', filter: 'brightness(0) invert(1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {React.createElement(tier2IconMap[icon])}
              </div>
            ) : (
              <img
                src={tier2IconMap[icon]}
                alt={icon}
                style={{
                  width: '16px',
                  height: '16px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            )
          ) : (
            icon && <span style={{ fontSize: '14px' }}>{icon}</span>
          )}
          {/* Label below icon, left-aligned */}
          <div style={{
            fontWeight: 'bold',
            fontSize: '10px',
            lineHeight: 1.4,  // Increased from 1.2 for better readability
            textAlign: 'left'
          }}>
            {label}
          </div>
          {/* Message positioned below the label */}
          {nodeMessage && active && (
            <div style={{
              position: 'absolute',
              top: '65%',
              left: '10px',
              right: '10px',
              fontSize: '7px',
              opacity: 0.9,
              textAlign: 'left',
              color: '#fff',
              fontStyle: 'italic',
              animation: 'fadeInOut 0.5s ease-in-out',
              lineHeight: '1.2',
              maxWidth: '90%',
              maxHeight: '17px',  // Approximately 2 lines with 7px font and 1.2 line-height
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {nodeMessage}
            </div>
          )}
        </div>
      )}


    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for performance
  return (
    prevProps.data.active === nextProps.data.active &&
    prevProps.data.label === nextProps.data.label &&
    prevProps.data.nodeMessage === nextProps.data.nodeMessage &&
    prevProps.data.dimmed === nextProps.data.dimmed &&
    prevProps.isConnectable === nextProps.isConnectable
  );
});

CustomBidirectionalNode.displayName = 'CustomBidirectionalNode';

export default CustomBidirectionalNode;
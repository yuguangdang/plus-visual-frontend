import React from 'react';

const SSEIndicator = ({ isConnected }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        backgroundColor: 'rgba(26, 26, 26, 0.9)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        color: '#e0e0e0',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: isConnected ? '#10b981' : '#ef4444',
          boxShadow: isConnected
            ? '0 0 0 0 rgba(16, 185, 129, 1)'
            : '0 0 0 0 rgba(239, 68, 68, 1)',
          animation: isConnected ? 'pulse 2s infinite' : 'none'
        }}
      />
      <span style={{ letterSpacing: '0.5px' }}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </span>

      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default SSEIndicator;
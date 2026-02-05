import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FlowGraph from './FlowGraph';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student-guide" element={<FlowGraph guideType="student" />} />
        <Route path="/resident-guide" element={<FlowGraph guideType="resident" />} />
        <Route path="/" element={<Navigate to="/resident-guide" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

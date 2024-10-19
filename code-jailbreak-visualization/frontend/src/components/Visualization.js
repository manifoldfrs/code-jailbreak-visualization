import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

function Visualization() {
  const [codeExamples, setCodeExamples] = useState([]);

  useEffect(() => {
    apiService.getCodeExamples().then((examples) => {
      setCodeExamples(examples);
    });
  }, []);

  return (
    <div>
      {/* Visualization logic goes here */}
      {codeExamples.map((example) => (
        <pre key={example.id}>{example.code}</pre>
      ))}
    </div>
  );
}

export default Visualization;

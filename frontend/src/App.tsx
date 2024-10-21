import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import axios from 'axios';
import './App.css';

interface EmbeddingPoint {
  x: number;
  y: number;
  code: string;
  isJailbreak: boolean;
}

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/embeddings');
      const embeddings: EmbeddingPoint[] = response.data;
      setData({
        datasets: [
          {
            label: 'Code Snippets',
            data: embeddings.map(item => ({
              x: item.x,
              y: item.y,
            })),
            backgroundColor: embeddings.map(item =>
              item.isJailbreak ? 'red' : 'blue'
            ),
          },
        ],
      });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Code Jailbreak Visualization</h1>
      {data && <Scatter data={data} />}
    </div>
  );
}

export default App;

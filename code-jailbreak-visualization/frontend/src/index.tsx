import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(process.env.REACT_APP_CONVEX_API_KEY!);

ReactDOM.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

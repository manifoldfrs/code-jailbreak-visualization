graph TD;
    A(Frontend Dashboard: React.js + Typescript) -->|API Requests| B(Backend API: FastAPI)
    B -->|LLM Inference| C(Nebius Compute/LLM)
    C -->|Embeddings/Outputs| B
    B -->|Data Management| D(Convex)
    D -->|State Sync| A
    A -->|Fetch Code Examples| E(Brave Search API)
    E -->|Code Snippets| A
    B -->|Compute Resources & Backend Computations| C

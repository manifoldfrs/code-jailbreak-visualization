from fastapi import FastAPI
from pydantic import BaseModel
from services.nebius_service import NebiusService
from services.brave_service import BraveService

app = FastAPI()
nebius_service = NebiusService()
brave_service = BraveService()


class CodeSnippet(BaseModel):
    code: str


@app.post("/embedding")
async def get_embedding(snippet: CodeSnippet) -> dict:
    """Generate an embedding for a code snippet."""
    embedding = await nebius_service.generate_embeddings(snippet.code)
    return {"embedding": embedding}


@app.get("/code_snippets")
async def fetch_code_snippets(query: str) -> dict:
    """Fetch code snippets based on a search query."""
    snippets = await brave_service.fetch_code_snippets(query)
    return {"snippets": snippets}


@app.get("/")
async def read_root():
    return {"message": "Welcome to the Code Jailbreak Visualization Backend"}

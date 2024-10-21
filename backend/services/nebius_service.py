import os
from typing import List
from nebius import Client
from dotenv import load_dotenv

load_dotenv()


class NebiusService:
    def __init__(self) -> None:
        """Initialize the Nebius client."""
        api_key = os.getenv("NEBIUS_API_KEY")
        self.client = Client(api_key=api_key)

    async def generate_embeddings(self, code_snippet: str) -> List[float]:
        """Generate an embedding for the provided code snippet."""
        embedding = await self.client.embed_text(code_snippet)
        return embedding

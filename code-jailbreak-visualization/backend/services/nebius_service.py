import os
from nebius import Client

from dotenv import load_dotenv

load_dotenv()


class NebiusService:
    def __init__(self):
        api_key = os.getenv("NEBIUS_API_KEY")
        self.client = Client(api_key=api_key)

    def generate_embeddings(self, code_snippet):
        embedding = self.client.embed_text(code_snippet)
        return embedding

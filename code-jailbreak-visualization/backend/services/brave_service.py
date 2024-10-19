import os
from brave_sdk import BraveClient


class BraveService:
    def __init__(self):
        api_key = os.getenv("BRAVE_API_KEY")
        self.client = BraveClient(api_key=api_key)

    def fetch_code_snippets(self, query):
        response = self.client.search_code(query)
        code_snippets = response.get("results", [])
        return code_snippets

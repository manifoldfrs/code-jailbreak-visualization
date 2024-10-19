const apiUrl = 'http://localhost:5000/api';

async function getCodeExamples() {
  const response = await fetch(`${apiUrl}/code-examples`);
  return response.json();
}

async function processCode(codeSnippet) {
  const response = await fetch(`${apiUrl}/process`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: codeSnippet })
  });
  return response.json();
}

export default { getCodeExamples, processCode };

const express = require('express');
const router = express.Router();
const nebiusService = require('../services/nebiusService');
const braveService = require('../services/braveService');

// Endpoint to process code snippet with LLM
router.post('/process', async (req, res) => {
  const codeSnippet = req.body.code;
  try {
    const result = await nebiusService.processCode(codeSnippet);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch code examples
router.get('/code-examples', async (req, res) => {
  try {
    const examples = await braveService.fetchCodeExamples();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

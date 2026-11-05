module.exports = async function handler(req, res) {
  // Activer CORS pour les requêtes depuis le Pi Browser
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentId } = req.body || {};
  if (!paymentId) {
    return res.status(400).json({ error: 'paymentId is required' });
  }

  const apiKey = process.env.PI_API_KEY;
  if (!apiKey) {
    console.error('[Pi Radio Backend] PI_API_KEY manquante dans les variables Vercel');
    return res.status(500).json({ error: 'PI_API_KEY is not configured in Vercel environment variables' });
  }

  try {
    console.log(`[Pi Radio Backend] Approbation du paiement Pi: ${paymentId}`);
    const piResponse = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${apiKey.trim()}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await piResponse.json();
    console.log('[Pi Radio Backend] Réponse Pi Network (Approve):', data);
    return res.status(piResponse.status).json(data);
  } catch (err) {
    console.error('[Pi Radio Backend] Erreur lors de l\'approbation:', err);
    return res.status(500).json({ error: err.message });
  }
};

let lastRoll = { value: 1, name: null, at: 0 };

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    const { value, name } = req.body || {};
    if (value >= 1 && value <= 6) {
      lastRoll = { value, name: name || null, at: Date.now() };
    }
    return res.json(lastRoll);
  }

  res.json(lastRoll);
}

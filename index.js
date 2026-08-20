require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Thank your fellow backend dev
const { verifySession, requireRole } = require('./middleware');
const { errorHandler } = require('./envelope');

// Your own handlers
const h = require('./handlers');

const app = express();















const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Festivent Phase 1 backend listening on :${PORT}`));
}

module.exports = app;

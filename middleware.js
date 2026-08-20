const supabase = require('./supabaseClient');
const pool = require('./db');
const { ApiError } = require('./envelope');

async function verifySession(req, res, next) {

}

function requireRole(...allowed) {

}

module.exports = { verifySession, requireRole };

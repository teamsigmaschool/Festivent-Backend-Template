// Fellow backend dev helped you with these
const supabase = require('./supabaseClient');
const pool = require('./db');
const { sendSuccess, ApiError } = require('./envelope');
const {
  validateSignup,
  validateLogin,
  validateRoleChange,
  validateEventInput,
  validatePagination,
  validateSort,
} = require('./validation');

// Your turn now.
async function signup(req, res, next) {

}

async function login(req, res, next) {

}

async function whoami(req, res) {

}

async function changeRole(req, res, next) {

}

async function getEvents(req, res, next) {

}

async function createEvent(req, res, next) {

}

async function updateEvent(req, res, next) {

}

async function deleteEvent(req, res, next) {

}



// You use this in index.js when setting the routes
module.exports = {
  signup,
  login,
  whoami,
  changeRole,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};

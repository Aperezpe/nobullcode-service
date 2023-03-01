"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var pool = require('../db/index');
/* GET all posts */
router.get('/', function (req, res, next) {
    res.send("hello");
});
/* CREATES a new post */
router.post('/', function (req, res, next) {
    // get the user data from the request body
    var _a = req.body, user_id = _a.user_id, title = _a.title, content = _a.content;
    // build the query string using parameterized values
    var queryString = 'INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *';
});
exports.default = router;

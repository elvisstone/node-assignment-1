"use strict";

const router = require('express').Router()

// Controller:
const todo = require('../controllers/todo.controller')

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete)

module.exports = router
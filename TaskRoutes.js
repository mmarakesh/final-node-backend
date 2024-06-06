const { Router } = require("express");
const {getTask, saveTask, deleteTask, editTask} = require('./TaskController')

const router = Router();
router.get('/', getTask)
router.post('/saveTask', saveTask)
router.post('/deleteTask', deleteTask)
router.put('/editTask', editTask)

module.exports = router;
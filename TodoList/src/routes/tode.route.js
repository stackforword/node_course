const express = require('express')
const router = express.Router()
const Todo = require('../models/todo.model')

// @route POST/api/v1/todos
router.post('/todos', async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTodo = new Todo({
            title,
            description
        })

        const SaveTodo = await newTodo.save();
        res.status(201).json({ message: "Todos Created Successfully", SaveTodo })
    } catch (error) {
        res.status(500).json({ message: 'Error while creating todos', error })
        console.log('Error while creating todos', error)
    }
})

// @route GET/api/v1/todos
router.get('/', async (req, res) => {
    try {
        const todo = await Todo.find()
        res.status(200).json({ todo })
    } catch (error) {
        res.status(500).json({ message: 'Error while Getting All Todo', error })
        console.log('Error while Getting All Todo', error)
    }
})

// @route GET/api/v1/todos/:id
// @Desc Get a todo Specific id
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not Found" })
        }
        res.status(200).json({ todo })
    } catch (error) {
        res.status(500).json({ message: 'Error while Get a Todo', error })
        console.log('Error while Get a Todo', error)
    }
})

// @route GET/api/v1/todos/:id
// @Desc Update a Todo
router.put('/:id', async (req, res) => {
    const { title, description, status } = req.body;
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo Not Found !" })
        }
        todo.title = title || todo.title;
        todo.description = description || todo.description;
        todo.status = status || todo.status;

        await todo.save()
        res.status(200).json({ message: "Todo Update Successfully", todo })

    } catch (error) {
        res.status(500).json({ message: "Error Update Todo", error })
        console.log("Error Update Todo", error)

    }
})


module.exports = router;
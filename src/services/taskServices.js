const mongoose = require('mongoose')
const db = require('../models')

const createTask = async (request) => {
    const createdRecord = await db.TASK.create(request)
    return JSON.parse(JSON.stringify(createdRecord))
}

const updateTask = async (request) => {
    const createdRecord = await db.TASK.updateOne({ _id: request.taskId }, { $set: { ...request } })
    return JSON.parse(JSON.stringify(createdRecord))
}

const completeTask = async (request) => {
    const createdRecord = await db.TASK.updateOne({ _id: request.taskId }, { $set: { status: 'completed' } })
    return JSON.parse(JSON.stringify(createdRecord))
}

const deleteTask = async (request) => {
    const createdRecord = await db.TASK.deleteOne({ _id: request.taskId })
    return JSON.parse(JSON.stringify(createdRecord))
}


const fetchTasks = async (request) => {
}

module.exports = {
    createTask,
    updateTask,
    fetchTasks,
    deleteTask,
    completeTask
}
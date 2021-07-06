const db = require('../database/connection')
const { QueryTypes } = require('sequelize')

exports.getUsers = async (req, res) => {
    try {
        const data = await db.sequelize.query("SELECT * FROM users", { type: QueryTypes.SELECT })

        res.send({
            status: 'success',
            data
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const {id} = req.params

        const data = await db.sequelize.query(`SELECT * FROM users WHERE id = ${id}`, { type: QueryTypes.SELECT })

        res.send({
            status: 'success',
            data
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.addUsers = async (req, res) => {
    try {
        const { email, password, name, role } = req.body

        const query = `INSERT INTO users (email,password,name,role) VALUES ('${email}','${password}','${name}','${role}')`

        await db.sequelize.query(query)

        res.send({
            status: 'success',
            message: 'Add user finished',
            query
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params
        
        const { email, password, name, role } = req.body

        const query = `UPDATE users 
                        SET email = '${email}', password = '${password}', name = '${name}', role = '${role}'
                        WHERE id = ${id}`

        await db.sequelize.query(query)

        res.send({
            status: 'success',
            message: `Update user id: ${id} finished`,
            data: req.body
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params

        const query = `DELETE FROM users WHERE id = ${id}`

        await db.sequelize.query(query)

        res.send({
            status: 'success',
            message: `Delete user id: ${id} finished`
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}
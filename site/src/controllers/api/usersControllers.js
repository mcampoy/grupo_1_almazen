let db = require('../../database/models');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

const controller = {

    role: async (req, res) => {
        try {
            let users = await db.User.findAll()
            let usersRole = await db.User.findAll({
                where: {
                    role: 0
                }
            })

            let editRole = await db.User.findAll({
                where: {
                    role: 1
                }
            })

            let adminRole = await db.User.findAll({
                where: {
                    role: 2
                }
            })

            let results = {
                meta: {
                    status: 200,
                },
                data: {

                length: users.length,
                users: usersRole.length,
                editRole: editRole.length,
                adminRole: adminRole.length
            }
            }

            return res.json(results)

        } catch (error) {
            return res.status(500).json({ok: false, error})
        }
    }

};

module.exports = controller;
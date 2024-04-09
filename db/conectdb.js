const mongoose = require('mongoose')

require('dotenv').config();

 const dburl = 'mongodb://127.0.0.1:27017/ecomerce'


const conectDb = async (conected) => mongoose.connect(dburl).then(
    (result) => {
        conected()
        console.warn('Db conected')
    }
).catch(
    (err) => console.error(err)
)

module.exports = conectDb
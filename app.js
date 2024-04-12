const express = require('express')
const cors = require('cors')
const path = require('path')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

// Specify the directory to serve static files from
const publicDirectoryPath = path.join(__dirname);

// email tranporder
const transporter = nodemailer.createTransport({
    host : 'smtp.hostinger.com',
    port : 465 ,
    secure : true , // Or your email provider
    auth: {
        user: 'test@tmv.icu',
        pass: 'Jawad.18'
    }
});

// routes
const productsAdmin = require('./routes/products-admin')

// middleware
app.use(express.json())
app.use(cors())
app.use(express.static(publicDirectoryPath));


// my libs
const conectDb = require('./db/conectdb')
const Dummy = require('./dummy/dummy')
const PORT = process.env.PORT || 3000
conectDb(() => app.listen(PORT, console.log(`server is running on port ${PORT} ...`)))

// test
app.get('/api/test', (req, res, next) => {
    res.status(200).json({ "message": "success" })
})

// routes 
app.use('/api', productsAdmin)







app.post('/send-email', (req, res) => {
    const mailOptions = {
        from: 'test@tmv.icu',
        to: 'jawad.pro17@gmail.com', 
        subject: Dummy.stringWithPonctuation(), 
        text: Dummy.paragraph(52)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({error : 'Error sending email'});
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({message : 'sent'});
        }
    });
});







// const dummyProds = async () => {
//     const Product = require('./models/product')
//     const Dummy = require('./dummy/dummy')
//     const uid = require('./utils/uuid')
//     images = []
//     for (let index = 0; index < 5; index++) {
//         images.push(Dummy.productsImage())
//     }
//     const product = new Product({ price : Dummy.number(10,599) , name: Dummy.productName(), description: Dummy.paragraph(3), sku: uid(6), images })
//     await product.save()
// }

// console.log('begin')
// for (let index = 0; index < 1000; index++) {
//     dummyProds()
// }
// console.log('end')







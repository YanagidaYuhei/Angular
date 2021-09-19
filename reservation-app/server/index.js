//Expressサーバー設定
const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const SampleDb = require('./sample-db')

const productRoutes = require('./routes/products')

const app = express()

//Mongooseへ接続してサンプルデータを保存する
mongoose.connect(config.DB_URI)
    .then(
        () => {
            const sampleDb = new SampleDb()
            sampleDb.initDb()
        }
    )

//Postman確認用
app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001'

//ターミナル確認用
app.listen(PORT, function() {
    console.log('I am running')
})
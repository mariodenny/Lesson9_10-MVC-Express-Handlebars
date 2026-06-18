import './db.js'
import express from 'express'
import { engine } from 'express-handlebars' 
import session from 'express-session'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'

const app = express()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.urlencoded({
    extended : true
}))

app.use(express.json())
app.use(session({
  secret: 'randomStringOfSecret123@123009',
  resave:false,
  saveUninitialized:false,
  store: MongoStore.create({
    mongoUrl:'mongodb://localhost:27017/mongodb-mervin'
  }),
  cookie:{
    maxAge : 1000 * 60 * 60 *24 
  }
}))

import BiodataRoutes from "./routes/BiodataRoutes.js"
app.use("/biodata", BiodataRoutes)
import AuthRoutes from './routes/AuthRoutes.js'
app.use("/auth", AuthRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
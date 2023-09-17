import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js' 
import { MONGO_URL, PORT } from './config.js'

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use("/product", productRoutes)
app.use("/user", userRoutes)

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`))

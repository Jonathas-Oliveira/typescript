import express from 'express'
import {HelloWolrd} from './route'
const app = express()

app.get('/', () => HelloWolrd)



app.listen(3000)
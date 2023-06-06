import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import usersRouter from './app/modules/users/users.route'
import usersRoutes from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
// console.log(app.get('env'))
// console.log(process.env)

app.use('/api/v1/users/', usersRoutes)
//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app

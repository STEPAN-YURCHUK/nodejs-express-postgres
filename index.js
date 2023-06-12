import express from 'express'
import postRouter from './routes/post.router.js'
import userRouter from './routes/user.router.js'

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => {
	console.log(`SERVER WORK. PORT: ${PORT}`)
})

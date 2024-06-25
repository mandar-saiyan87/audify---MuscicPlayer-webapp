import express from 'express'
import sql from '../db.js'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';




config()
let { JWT_SECRET } = process.env
const router = express.Router()

router.post('/usersignup', async (req, res) => {
  const registration = req.body
  try {
    const userExist = await sql`select * from public.users where username=${registration.username} or email=${registration.email}`

    if (userExist.length > 0) {
      res.status(409).json({ code: 409, msg: 'User already exist' })
    } else {
      const hash = bcrypt.hashSync(registration.password, 10)
      const newUser = await sql`insert into public.users (username, email, passwordhash)
    values (${registration.username}, ${registration.email}, ${hash})
    returning username, email
    `
      res.status(200).json({ code: 200, newuser: newUser, msg: 'User created successfully' })
    }
  } catch (error) {
    // console.log(error)
    res.status(500).json({ code: 500, msg: 'Internal server error', error: error })
  }
})

router.post('/login', async (req, res) => {
  const loginuser = req.body
  let userPlaylists = []
  try {
    const user = await sql`SELECT * FROM Users WHERE Email = ${loginuser.email}`;
    if (user.length === 0) {
      res.status(404).json({ code: 404, msg: 'User does not exist' });
    }
    const isPasswordValid = await bcrypt.compare(loginuser.password, user[0].passwordhash);
    if (!isPasswordValid) {
      res.status(400).json({ code: 400, msg: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user[0].userid }, JWT_SECRET, { expiresIn: '1day' })
    if (isPasswordValid && token) {
      userPlaylists = await sql`select * from public.playlists where userid = ${user[0].userid}`
    }
    res.status(200).json({ code: 200, user: { username: user[0].username, email: user[0].email, id: user[0].userid }, token: token, userPlaylist: userPlaylists })
  } catch (error) {
    console.log(error)
    res.status(500).json({ code: 500, msg: 'Internal server error', error: error })
  }
})

// router.post('/logout', async (req, res) => { 
//   try {

//   } catch (error) {

//   }
// })

export default router
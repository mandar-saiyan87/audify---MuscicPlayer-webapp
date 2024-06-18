import express from 'express'
import sql from '../db.js'
import bcrypt from "bcrypt";

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

router.post('login')

export default router
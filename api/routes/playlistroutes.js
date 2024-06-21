import express from 'express'
import sql from '../db.js'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';

const router = express.Router()

router.post('/createnewplaylist', async (req, res) => {
  const playlist = req.body
  // console.log(playlist)
  try {
    const playlistExist = await sql`select * from public.playlists where name=${playlist.name}`
    if (playlistExist.length > 0) {
      res.status(409).json({ code: 409, msg: 'Playlist already exist' })
    } else {
      const newPlaylist = await sql`insert into public.playlists (userid, name, description)
      values (${playlist.userid}, ${playlist.name}, ${playlist.description})
      returning playlistid, name
      `
      console.log(newPlaylist)
      res.status(200).json({ code: 200, newPlaylist: newPlaylist, msg: 'New playlist created' })
    }
    // res.status(200).json({ code: 200, msg: 'In progress', playlist: playlist })
  } catch (error) {
    console.log(error)
    res.status(500).json({ code: 500, msg: 'Internal server error', error: error })
  }
})

export default router
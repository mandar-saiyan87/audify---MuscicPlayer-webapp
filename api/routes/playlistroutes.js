import express from 'express'
import sql from '../db.js'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';


config()
let { JWT_SECRET } = process.env
const router = express.Router()

router.post('/createnewplaylist', async (req, res) => {

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ code: 401, msg: 'No authorization token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const playlist = req.body
    // console.log(playlist)
    const playlistExist = await sql`select * from public.playlists where name=${playlist.playlistname}`
    if (playlistExist.length > 0) {
      res.status(409).json({ code: 409, msg: 'Playlist already exist' })
    } else {
      const newPlaylist = await sql`insert into public.playlists (userid, name, description, imgurl)
      values (${playlist.id}, ${playlist.playlistname}, ${playlist.description}, ${playlist.imgurl})
      returning playlistid, name, description, imgurl
      `
      // console.log(newPlaylist)
      res.status(200).json({ code: 200, newPlaylist: newPlaylist, msg: 'New playlist created' })
    }

  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ code: 401, msg: 'Invalid or expired token', error: error.message });
    }
    console.log(error);
    return res.status(500).json({ code: 500, msg: 'Internal server error', error: error.message });
  }
})


router.get('/getUserPlaylists/:userid', async (req, res) => {

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ code: 401, msg: 'No authorization token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const userid = req.params.userid
    // console.log(userid)
    const playlists = await sql`select * from public.playlists where userid=${userid}`
    if (playlists.length > 0) {
      res.status(200).json({ code: 200, playlists: playlists, msg: 'Playlist fetched successfully' })
    } else {
      res.status(404).json({ code: 404, msg: 'No playlist found' })
    }

  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ code: 401, msg: 'Invalid or expired token', error: error.message });
    }
    console.log(error);
    return res.status(500).json({ code: 500, msg: 'Internal server error', error: error.message });
  }
})


router.post('/deletePlaylist', async (req, res) => {

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ code: 401, msg: 'No authorization token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const playlist = req.body
    // console.log(playlist)
    const playlistExist = await sql`select * from public.playlists where playlistid=${playlist.id}`
    console.log(playlistExist)
    if (playlistExist.length === 0) {
      res.status(404).json({ code: 409, msg: 'Playlist does not exist' })
    } else {
      const delPlaylist = await sql`delete from public.playlists where playlistid=${playlist.id}
      returning playlistid
      `
      if (delPlaylist[0].playlistid) {
        res.status(200).json({ code: 200, deleted: delPlaylist[0].playlistid, msg: 'Playlist deleted successfully' })
      }
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ code: 401, msg: 'Invalid or expired token', error: error.message });
    }
    console.log(error);
    return res.status(500).json({ code: 500, msg: 'Internal server error', error: error.message });
  }
})

router.get('/getplaylisttracks/:playlistid', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ code: 401, msg: 'No authorization token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const playlist = req.params.playlistid
    const playlistTracks = await sql`
    select s.*
    from public.playlistsongs ps
    join public.songs s on ps.songid = s.songid
    where ps.playlistid=${playlist}
    `
    // console.log(playlistTracks)
    return res.status(200).json({ code: 200, tracklist: playlistTracks, msg: 'Tracks fetched successfully' });
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ code: 401, msg: 'Invalid or expired token', error: error.message });
    }
    console.log(error);
    return res.status(500).json({ code: 500, msg: 'Internal server error', error: error.message });
  }
})

router.post('/addtracktoplaylist', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ code: 401, msg: 'No authorization token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const playlist = req.body
    // console.log(playlist)
    await sql.begin(async (sql) => {
      for (const playlistid of playlist.selectedplaylists) {
        await sql`insert into public.playlistsongs (playlistid, songid)
        values (${playlistid}, ${playlist.id} )
        `
      }
    })

    return res.status(200).json({ code: 200, msg: 'Tracks added to playlists successfully' });
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ code: 401, msg: 'Invalid or expired token', error: error.message });
    }
    console.log(error);
    return res.status(500).json({ code: 500, msg: 'Internal server error', error: error.message });
  }
})

export default router



// router.post('/getUserPlaylists', async (req, res) => {

//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).json({ code: 401, msg: 'No authorization token provided' });
//   }

//   const token = authHeader.split(' ')[1];
//   try {
//     const decodedToken = jwt.verify(token, JWT_SECRET);

//     const playlist = req.body
//     console.log(playlist)
//     const playlistExist = await sql`select * from public.playlists where name=${playlist.playlistname}`
//     if (playlistExist.length > 0) {
//       res.status(409).json({ code: 409, msg: 'Playlist already exist' })
//     } else {
//       const newPlaylist = await sql`insert into public.playlists (userid, name, description, imgurl)
//       values (${playlist.id}, ${playlist.playlistname}, ${playlist.description}, ${playlist.imgurl})
//       returning playlistid, name, description, imgurl
//       `
//       // console.log(newPlaylist)
//       res.status(200).json({ code: 200, newPlaylist: newPlaylist, msg: 'New playlist created' })
//     }

//   } catch (error) {
//     if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
//       return res.status(401).json({ code: 401, msg: 'Invalid or expired token', error: error.message });
//     }
//     console.log(error);
//     return res.status(500).json({ code: 500, msg: 'Internal server error', error: error.message });
//   }
// })
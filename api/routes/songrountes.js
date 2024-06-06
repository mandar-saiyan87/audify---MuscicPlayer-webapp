import express from 'express'
import sql from '../db.js'

const router = express.Router()

router.get('/testroute', async (req, res) => {
  try {
    res.status(200).json({ 'code': 200, 'status': 'OK' })
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

// Get all tracks
router.get('/tracks', async (req, res) => {
  try {
    const tracks = await sql`select * from public.songs`
    if (tracks.length > 0) {
      res.status(200).json({ code: 200, trackList: tracks, msg: 'Tracks fetched successfully' })
    } else {
      res.status(200).json({ code: 200, trackList: [], msg: 'No tracks added' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/tracksbyalbum/:id', async (req, res) => {

  const albumid = req.params.id
  try {
    const tracks = await sql`select * from public.songs where albumid=${albumid}`
    if (tracks.length > 0) {
      res.status(200).json({ code: 200, trackList: tracks, msg: 'Tracks fetched successfully' })
    } else {
      res.status(200).json({ code: 200, trackList: [], msg: 'No tracks added' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/tracksbyid/:id', async (req, res) => {

  const trackid = req.params.id
  console.log(trackid)
  try {
    const tracks = await sql`select * from public.songs where songid=${trackid}`
    console.log(tracks)
    if (tracks.length > 0) {
      res.status(200).json({ code: 200, trackList: tracks, msg: 'Tracks fetched successfully' })
    } else {
      res.status(200).json({ code: 200, trackList: [], msg: 'No tracks added' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/artists', async (req, res) => {
  try {
    const artists = await sql`select * from public.artists`
    if (artists.length > 0) {
      res.status(200).json({ code: 200, artistsList: artists, msg: 'Artists data fetched successfully' })
    } else {
      res.status(200).json({ code: 200, artistsList: [], msg: 'No artists data added' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/albums', async (req, res) => {
  try {
    const albums = await sql`select * from public.albums`
    if (albums.length > 0) {
      res.status(200).json({ code: 200, albumsList: albums, msg: 'Albums data fetched successfully' })
    } else {
      res.status(200).json({ code: 200, albumsList: [], msg: 'No albums data added' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/categories', async (req, res) => {
  try {
    const categories = await sql`select * from public.categories`
    if (categories.length > 0) {
      res.status(200).json({ code: 200, categoryList: categories, msg: 'Category data fetched successfully' })
    } else {
      res.status(200).json({ code: 200, categoryList: [], msg: 'No category data added' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/genres', async (req, res) => {
  try {
    const genre = await sql`select * from public.genres`
    if (genre.length > 0) {
      res.status(200).json({ code: 200, genreList: genre, msg: 'Genre data fetched successfully' })
    } else {
      res.status(200).json({ code: 200, genreList: [], msg: 'No Genre data added' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

export default router;
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

router.get('/tracksbyartist/:id', async (req, res) => {

  const artistid = req.params.id
  try {
    const tracks = await sql`select * from public.songs where artistid=${artistid}`
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

router.get('/genres/:genre', async (req, res) => {

  const genre = req.params.genre

  try {
    const query = genre === 'Other' ?
      sql`select * from public.songs where genre=${genre} or genre is null or genre=''` :
      sql`select * from public.songs where genre=${genre}`

    const tracksbygenre = await query;
    // console.log(tracksbygenre)

    if (tracksbygenre.length > 0) {
      res.status(200).json({ code: 200, trackList: tracksbygenre, msg: 'Tracks fetched successfully' })
    } else {
      res.status(200).json({ code: 200, trackList: [], msg: 'No tracks found' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})


router.get('/categories/:category', async (req, res) => {

  const category = req.params.category

  try {
    const songsbycategory = await sql`select Songs.* from Songs 
    join SongCategories on Songs.SongID = SongCategories.SongID 
    join Categories on SongCategories.CategoryID = Categories.CategoryID
    where Categories.Name = ${category}
    `
    // console.log(songsbycategory)
    if (songsbycategory.length > 0) {
      res.status(200).json({ code: 200, trackList: songsbycategory, msg: 'Tracks fetched successfully' })
    } else {
      res.status(200).json({ code: 200, trackList: [], msg: 'No tracks found' })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/searching/:search', async (req, res) => {

  const searchText = req.params.search

  try {
    const searchResults = await sql`
    select 'song' as type, songid as id, title as name, mp3url as url from songs where title ILIKE ${'%' + searchText + '%'}
    UNION ALL

    SELECT 'artist' AS type, artistid AS id, name AS name, Null AS url FROM artists WHERE name ILIKE ${'%' + searchText + '%'}
    UNION ALL

    SELECT 'album' AS type, albumid AS id, title AS name, NULL AS url FROM albums WHERE title ILIKE ${'%' + searchText + '%'}
    `
    if (searchResults.length > 0) {
      res.status(200).json({ code: 200, searchList: searchResults, msg: 'Search data fetched successfully' })
    } else {
      res.status(200).json({ code: 200, searchList: [], msg: 'No match found' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal server error')
  }
})

export default router;
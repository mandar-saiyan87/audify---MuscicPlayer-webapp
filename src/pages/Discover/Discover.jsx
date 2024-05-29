import React, { useState } from 'react'
import SongCard from '../../components/SongCard'
import styled from '@emotion/styled'
import { genres } from '../../assets/constants'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useGetTopTracksQuery } from '../../redux/services/spotifyApi';
import data from '../../redux/charts.json'

const DiscoverMain = styled('div')(({ theme }) => ({

}))

const DiscoverHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

function Discover() {
  // const { data, isfetching, error } = useGetTopTracksQuery();

  // console.log(data)

  const [genreSelect, setgenreSelect] = useState(genres[0].value)


  return (
    <DiscoverMain>
      <DiscoverHeader>
        <p className='section_title'>Discover</p>
        <select name="" id="" value={genreSelect} onChange={(e) => setgenreSelect(e.target.value)} className='genre_selection'>
          {genres.map((genre) => (
            <option value={genre.value} key={genre.title}>{genre.title}</option>
          ))}
        </select>
      </DiscoverHeader>
      <Box sx={{
        margin: '1rem 0'
      }}>
        <Grid container rowGap={4}>
          {data.tracks?.map((song, index) => (
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <SongCard key={song.id} song={song} songIndex={index} />
            </Grid>
          ))}
        </Grid>
      </Box>

    </DiscoverMain>
  )
}

export default Discover
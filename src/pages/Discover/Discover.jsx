import React, { useState } from 'react'
import SongCard from '../../components/SongCard'
import styled from '@emotion/styled'
import { genres } from '../../assets/constants'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import data from '../../store/charts.json'

const DiscoverMain = styled('div')(({ theme }) => ({

}))

const DiscoverHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

function Discover() {

  const [genreSelect, setgenreSelect] = useState(genres[0].value)


  return (
    <DiscoverMain>
      <DiscoverHeader>
        <p className='section_title'>Discover</p>
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
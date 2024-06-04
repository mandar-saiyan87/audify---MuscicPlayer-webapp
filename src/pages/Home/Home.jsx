import React, { useState } from 'react'
import {
  HomeMain,
  SelectionTab,
  Select
} from './home.styles'
import { selectiontabs } from '../../assets/constants'
import DiscoverSections from '../../components/DiscoverSections/DiscoverSections'
import TopAlbums from '../../components/TopAlbums/TopAlbums'
import TopTracks from '../../components/TopTracks/TopTracks'
import TopArtists from '../../components/TopArtists/TopArtists'
import { useGetsongsQuery, useGetAlbumsQuery, useGetArtistsQuery } from '../../store/services/songsApi'


function Home() {

  const { data: songs, error: songsError, isLoading: isSongsLoading } = useGetsongsQuery()

  const { data: artists, error: artistsError, isLoading: isArtistsLoading } = useGetArtistsQuery()


  // console.log(categories)
  const [activeSelection, setActiveSelection] = useState('All')

  return (
    <HomeMain>
      <SelectionTab>
        {selectiontabs.map((tab, index) => (
          <Select key={index} active={activeSelection === tab} onClick={() => setActiveSelection(tab)}>{tab}</Select>
        ))}
      </SelectionTab>
      <DiscoverSections />
      <TopAlbums />
      <TopTracks />
      <TopArtists />
    </HomeMain>
  )
}

export default Home
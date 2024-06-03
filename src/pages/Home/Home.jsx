import React, { useState } from 'react'
import {
  HomeMain,
  SelectionTab,
  Select
} from './home.styles'
import { selectiontabs } from '../../assets/constants'
import DiscoverSections from '../../components/DiscoverSections/DiscoverSections'
import { useGetsongsQuery, useGetAlbumsQuery, useGetArtistsQuery, useGetCategoriesQuery } from '../../store/services/songsApi'


function Home() {

  const { data: songs, error: songsError, isLoading: isSongsLoading } = useGetsongsQuery()
  const { data: albums, error: albumsError, isLoading: isAlbumsLoading } = useGetAlbumsQuery()
  const { data: artists, error: artistsError, isLoading: isArtistsLoading } = useGetArtistsQuery()
  const { data: categories, error: categoriesError, isLoading: isCategoriesLoading } = useGetCategoriesQuery()

  console.log(categories)
  const [activeSelection, setActiveSelection] = useState('All')

  return (
    <HomeMain>
      <SelectionTab>
        {selectiontabs.map((tab, index) => (
          <Select key={index} active={activeSelection === tab} onClick={() => setActiveSelection(tab)}>{tab}</Select>
        ))}
      </SelectionTab>
      <DiscoverSections categories />
    </HomeMain>
  )
}

export default Home
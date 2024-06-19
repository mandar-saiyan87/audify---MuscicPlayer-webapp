import React, { useState, useRef, useEffect } from 'react'
import {
  SearchPageMain,
  SearchBar,
  SearchPageContent,
  ResultAlbum,
  ResultTracks
} from './search.styles'
import { IoSearch } from "react-icons/io5";
import { useGetCategoriesQuery, useGetGenresQuery } from '../../store/services/songsApi';
import CategoryCard from '../../components/BrowseCards/CategoryCard';
import GenreCard from '../../components/BrowseCards/GenreCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getRandomColor } from '../../utils/generatecolor';
import { Link } from 'react-router-dom';
import { useSearchQuery } from '../../store/services/songsApi';
import { useSelector } from 'react-redux';
import ArtistsCard from '../../components/TopArtists/ArtistsCard';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import { CardContainer } from '../Albums/albums.styles';
import { ArtsistsContainer } from '../Artists/artists.styles';
import SearchTrackCard from '../../components/SearchTrackCard/SearchTrackCard';


function Search() {

  let artists = useSelector((state) => state.appdata.artists)
  let albums = useSelector((state) => state.appdata.albums)
  let tracks = useSelector((state) => state.appdata.tracks)

  const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useGetCategoriesQuery()
  const { data: genres, error: genresError, isLoading: genresLoading } = useGetGenresQuery()

  const [searchText, setSearchText] = useState('')
  const [triggerSearch, setTrigger] = useState(false)
  const [isOutline, setOutline] = useState(false)
  const [genreColors, setGenreColors] = useState({})
  const searchRef = useRef()
  const { data: searchResults, isLoading: searchLoading, error: searchError } = useSearchQuery(searchText, {
    skip: !searchText || !triggerSearch,
  });


  const searchSongs = searchText ? searchResults?.searchList.filter((result) => result.type === 'song') : []
  const searchAlbum = searchText ? searchResults?.searchList.filter((result) => result.type === 'album') : []
  const searchArtist = searchText ? searchResults?.searchList.filter((result) => result.type === 'artist') : []

  console.log(searchResults)



  useEffect(() => {
    if (searchText.length > 0) {
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  }, [searchText]);

  useEffect(() => {
    if (genres) {
      const initialColors = {}
      genres?.genreList.forEach(genre => {
        initialColors[genre.genreid] = getRandomColor()
      })
      setGenreColors(initialColors)
    }
  }, [genres])

  function handleOutline() {
    setOutline(true)
  }

  useEffect(() => {
    function clickedoutInput(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOutline(false)
      }
    }
    document.addEventListener('mousedown', clickedoutInput)
    return () => {
      document.removeEventListener('mousedown', clickedoutInput)
    }
  }, [searchRef])


  return (
    <SearchPageMain>
      <SearchBar outlineCol={isOutline}>
        <IoSearch color='white' size={22} />
        <input type="text" className='search_bar' ref={searchRef} onClick={handleOutline} onChange={(e) => setSearchText(e.target.value)} />
      </SearchBar>
      {!searchText &&
        <SearchPageContent>
          <p className='section_title'>Browse All</p>
          <Box sx={{ flexGrow: 1, marginTop: '1rem' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
              {categories?.categoryList.map((category) => (
                <Grid item xs={6} sm={4} md={4} key={category.categoryid}>
                  <CategoryCard bgColor={category.color} category={category} />
                </Grid>
              ))}
              {genres?.genreList.map((genre) => {
                return (
                  <Grid item xs={6} sm={4} md={4} key={genre.genreid}>
                    <Link to={`/home/genre/${genre.name}`}>
                      <GenreCard bgColor={genreColors[genre.genreid]} name={genre.name} />
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </SearchPageContent>
      }
      {
        searchResults?.searchList.length === 0 &&
        <div>No match found</div>
      }
      {searchArtist?.length > 0 &&
        <ArtsistsContainer>
          {searchArtist?.map((artist) => {
            const artistData = artists?.filter((data) => data.artistid === artist.id)
            return (
              <ArtistsCard carddetails={artistData[0]} key={artist.id} />
            )
          })}
        </ArtsistsContainer>
      }
      {
        searchAlbum?.length > 0 &&
        <ResultAlbum>
          {searchAlbum?.map((album) => {
            const albumData = albums?.filter((data) => data.albumid === album.id)
            return (
              <CardContainer key={album.id}>
                <AlbumCard carddetails={albumData[0]} />
              </CardContainer>
            )
          })}
        </ResultAlbum>
      }
      {
        searchSongs?.length > 0 &&
        <ResultTracks>
          {searchSongs?.map((track, index) => {
            const trackData = tracks?.filter((data) => data.songid === track.id)
            return (
              <SearchTrackCard trackdetails={trackData} key={track.id} />
            )
          })}
        </ResultTracks>
      }

    </SearchPageMain>
  )
}

export default Search


{/* {categories?.categoryList.map((category) => (
            <CategoryCard key={category.categoryid}/>
          ))}
          {genres?.genreList.map((genre) => (
            <GenreCard key={genre.genreid}/>
          ))} */}

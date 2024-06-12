import React, { useState, useRef, useEffect } from 'react'
import { SearchPageMain, SearchBar } from './search.styles'
import { IoSearch } from "react-icons/io5";

function Search() {

  const searchRef = useRef()
  const [searchOutline, setOutline] = useState(false)

  function getOutline() { 
    setOutline(true)
  }

  useEffect(() => {
    function ClickedoutInput(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOutline(false)
      }
    }
    document.addEventListener('mousedown', ClickedoutInput)
    return () => {
      document.removeEventListener('mousedown', ClickedoutInput)
    }
  }, [searchRef])


  return (
    <SearchPageMain>
      <SearchBar outlineCol={searchOutline}>
        <IoSearch color={searchOutline ? 'white' : ''} size={22} />
        <input type="text" className='search_bar' ref={searchRef} onClick={getOutline}/>
      </SearchBar>
    </SearchPageMain>
  )
}

export default Search

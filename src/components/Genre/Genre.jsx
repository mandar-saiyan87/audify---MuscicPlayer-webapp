import React from 'react'
import { GenreMain, GenreContainer, GenreDiv } from './genre.styles'
import { useGetGenresQuery } from '../../store/services/songsApi'
import { getRandomColor } from '../../utils/generatecolor'
import { Link } from 'react-router-dom'

function Genre() {

    const { data, error, isLoading } = useGetGenresQuery()


  return (
    <GenreMain>
      <p className='page_head_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium nemo delectus architecto voluptatem nihil beatae placeat,
        ipsum repellat ipsa aspernatur voluptas amet. Laudantium distinctio aliquam fugiat placeat officia necessitatibus.</p>
      <GenreContainer>
        {data?.genreList.map((genre) => {
          // const randomColor = genreBG[Math.floor(Math.random() * genreBG.length)];
          const randomColor = getRandomColor();
          return (
            <Link to={`/home/genre/${genre.name}`}>
              <GenreDiv key={genre.genreid} bgColor={randomColor}>
                <p>{genre.name}</p>
              </GenreDiv>
            </Link>
          );
        })}
      </GenreContainer>
    </GenreMain>
  )
}

export default Genre
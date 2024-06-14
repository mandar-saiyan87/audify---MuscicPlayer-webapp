import React from 'react'
import { CardMain } from './card.styles'
import { useNavigate } from 'react-router-dom'

function CategoryCard({ bgColor, category }) {

  const navigate = useNavigate()

  function goToCategory(category) {
    navigate(
      `/home/discover/${category.name}`,
      { state: category }
    )
  }

  return (
    <CardMain bgColor={bgColor} onClick={() => goToCategory(category)}>{category.name}</CardMain>
  )
}

export default CategoryCard
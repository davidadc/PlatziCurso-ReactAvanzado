import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

// Components
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

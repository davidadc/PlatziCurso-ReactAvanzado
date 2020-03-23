import React from 'react'

// Graphql
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// Components
import { PhotoCard } from '../PhotoCard'

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <li key={photo.id}><PhotoCard {...photo} /></li>)}
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

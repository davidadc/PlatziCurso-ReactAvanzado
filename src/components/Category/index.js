import React from 'react'

// Styled Components
import { Link, Image } from './styles'

// Constants
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link
    to={path}
  >
    <Image src={cover} />
    {emoji}
  </Link>
)

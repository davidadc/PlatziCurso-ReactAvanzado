import React, { useEffect, useState } from 'react'

// Components
import { Category } from '../Category'

// Styled Components
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://petgram-server-ddelgado-5xwsbs4j9.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)}
    </List>

  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

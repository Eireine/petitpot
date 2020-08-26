import React from 'react'
import Header from './index'

export default {
  title: 'Header',
  component: Header
}

const header1 = {
  logo: '/images/petit-pot.png',
  navItems: [
    { title: 'Activités', link: '#' },
    { title: 'Cuisine', link: '#' },
    { title: 'Kawaii', link: '#' },
    { title: 'Mum and kid', link: '#' },
    { title: "Prendre l'air", link: '#' }
  ]
}

export const BasicHeader = () => <Header {...header1} />

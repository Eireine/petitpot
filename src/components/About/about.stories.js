import React from 'react'
import About from './index'

export default {
  title: 'About',
  component: About
}

const about1 = {
  title: 'A propos ☀️',
  image: '/images/pokemon2.jpg',
  description: `Maecenas vitae tellus blandit, pellentesque felis non, rutrum ligula. Mauris vulputate consectetur gravida. Class aptent taciti sociosqu ad litora torquent.`
}

export const basicAbout = () => <About {...about1} />

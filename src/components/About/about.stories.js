import React from 'react'
import About from './index'

export default {
    title : "About",
    component : About
}

const article1 = {
    title: "A propos ☀️",
    image: "/images/pokemon.jpg",
    description: `Maecenas vitae tellus blandit, pellentesque felis non, rutrum ligula. Mauris vulputate consectetur gravida. Class aptent taciti sociosqu ad litora torquent.`
}

export const basicArticle = () => <About {...article1} />

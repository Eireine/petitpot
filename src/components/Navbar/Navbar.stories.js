import React from 'react'
import Navbar from './index'

export default {
    title : "Navbar",
    component : Navbar
}

const navbar1 = {
    navItems: [
        { title: "Activités", link: "#" },
        { title: "Cuisine", link: "#" },
        { title: "Kawaii", link: "#" },
        { title: "Mum and kid", link: "#" },
        { title: "Prendre l'air", link: "#" },
    ]
} 

export const BasicNavbar = () => <Navbar {...navbar1} />

import React from 'react'
import Navbar from './index'

export default {
    title : "Navbar",
    component : Navbar
}

const navbar1 = {
    navItems: [
        { title: "ACTIVITÉS", link: "#" },
        { title: "CUISINE", link: "#" },
        { title: "KAWAII", link: "#" },
        { title: "MUM AND KID", link: "#" },
        { title: "PRENDRE L'AIR", link: "#" },
    ]
} 

export const BasicNavbar = () => <Navbar {...navbar1} />

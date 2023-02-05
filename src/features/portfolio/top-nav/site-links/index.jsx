import { useState, useEffect } from 'react'

export default function SiteLinks(props) {
  const {} = props

  const links = [
    { name: 'Portfolio', anchor: 'work' },
    { name: 'About', anchor: 'about' },
    { name: 'Contact', anchor: 'contact' },
  ]

  return (
    <ul>
      {links.map(({ name, anchor }) => {
        console.log('wut', { name, anchor })
        return (
          <li>
            <a href={`#${anchor}`}>{name}</a>
          </li>
        )
      })}
    </ul>
  )
}
// DM: look for a font-awesome package on github that corresponds to https://use.fontawesome.com/releases/v5.15.4/css/all.css https://fontawesome.com/docs/web/use-with/react/use-with

/* 
   <header class="toolbar">
        <h3 class="logo"><a href="#">Moise Mulunguuuu</a></h3>
        <nav class="bars">
            <ul>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#"><i class="far fa-envelope hide" ></i></a></li> 
                <li class="humberger"><i class="fas fa-bars"></i></li>
            </ul> 
        </nav>
    </header>
    <div class="mobile-menu">
        <div class="time">
            <h3>09:41</h3>
            <ul class="icon-left">
                <li><i class="fas fa-signal"></i></li>
                <li><i class="fas fa-wifi"></i></li>
                <li><i class="fas fa-battery-full"></i></li>
            </ul>
        </div>
        <i class="fas fa-times cancel"></i>
        <ul class="menu-list">
            <li><div class="menu-box"><a href="#works">Portfolio</a></div></li>
            <li><div class="menu-box"><a href="#about">About</a></div></li>
            <li><div class="menu-box"><a href="#contact">Contact</a></div></li>
        </ul>
    </div> 
*/

import React, {useEffect, useState} from 'react'
import './styles.css'

import NavBar from "../../components/NavBar"
import { FaYoutube, FaGithub, FaSpotify, FaInstagram,
  FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { SiHackthebox } from "react-icons/si";

const InfoBox = ({id, name}) => {
  const iconFonts = {
    "youtube": {
      boxColor: 'white',
      iconColor: 'red',
      description: "fcdjhbecdfiesdkj",
      IconComponent: FaYoutube
    },
    "github": {
      boxColor: 'black',
      iconColor: 'white',
      description: "fcdjhbecdfiesdkj",
      IconComponent: FaGithub
    },
    "twitter": {
      boxColor: 'black',
      iconColor: 'white',
      description: "fcdjhbecdfiesdkj",
      IconComponent: FaTwitter
    },
    "hackthebox": {
      boxColor: 'black',
      iconColor: 'white',
      description: "fcdjhbecdfiesdkj",
      IconComponent: SiHackthebox
    },
    "linkedin": {
      boxColor: 'black',
      iconColor: 'white',
      description: "fcdjhbecdfiesdkj",
      IconComponent: FaLinkedin
    },
    "gmail": {
      boxColor: 'black',
      iconColor: 'white',
      description: "fcdjhbecdfiesdkj",
      IconComponent: FaMailBulk
    },
    "spotify": {
      boxColor: 'white',
      iconColor: 'green',
      description: "fcdjhbecdfiesdkj",
      IconComponent: FaSpotify
    },
    "instagram": {
      boxColor: 'white',
      iconColor: 'purple',
      description: "fcdjhbecdfiesdkj",
      IconComponent: FaInstagram
    },
  }
  const {IconComponent, boxColor, iconColor} = iconFonts[name.toLowerCase()]

  return (
    <a href={`/applets/?service=${id}`} alt="">
      <div className="box" style={{ backgroundColor: boxColor }}>
        <IconComponent className={"icon"} size={130} style={{color: iconColor}} />
        <h3 style={{color: iconColor}}>{name}</h3>
      </div>
    </a>
  )
}

export default function HomePage () {
  const [services, setServices] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://deciding-oyster-probably.ngrok-free.app/services', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        if (response.status === 200) {
          let res = await response.json()
          setServices(res)
        }
      } catch (error) {
        console.log('Erreur lors de la requête API:', error.message);
      }
    })()
  }, [])
  return (
    <div className="homePage">
      <div className="principalView">
        <h1>Start using our Services</h1>
        <div className="box-container">
          {services.map(({id, name}) =>
            <InfoBox key={id} id={id} name={name}/>
          )}
        </div>
      </div>
    </div>
  )
}
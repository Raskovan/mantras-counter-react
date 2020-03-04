import React from 'react'
import '../styles/MantrasIntro.css'

const MantrasIntro = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className="intro-container">
      <p className="intro_title">Manhattan Project Mantra Collection</p>
      <img
        src={require(`../assets/${
          darkMode ? 'mp_logo_white.png' : 'mp_logo_black.png'
        }`)}
        alt="Manhattan Project Logo"
        className="intro_image"
      />
      <p className="intro_text">
        Whether you do a formal Guru Yoga session or are doing mantras while
        walking in the park...if you are dedicating them to{' '}
        <a href="http://www.diamondway.org/manhattan-project/" target="_new">
          Manhattan Project
        </a>
        , make that wish and simply count them and make a record of it. Then
        input the number of mantras in the form below. Again, you do not have to
        do a formal sitting session in order to count your Karmapa Chenno
        mantras. Formal sessions on the 16th Karmapa in your local center are
        recommended as well. We wish to keep this project ongoing throughout
        2020 and see how soon we can accomplish <b>4 million Karmapa Chennos</b>
        . Primarily we wish to build up Karmapa's power-field and establish the
        finest inner conditions for this project's success. We hope you will
        join us!
      </p>
    </div>
  )
}

export default MantrasIntro

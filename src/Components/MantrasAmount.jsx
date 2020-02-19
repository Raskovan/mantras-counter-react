import React from 'react'
import '../styles/MantrasAmount.css'

export default function MantrasAmount(props) {
  const { allMantras } = props

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="mantras_count_container">
      <p className="mantras_count">
        {numberWithCommas(allMantras.mantras_count)}
      </p>
      <p className="mantras_count_text">Mantras Collected</p>
    </div>
  )
}

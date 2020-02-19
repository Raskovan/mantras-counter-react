import React from 'react'
import '../styles/MantrasHistory.css'

export default function MantrasHistory(props) {
  const { data } = props

  const formatDate = date => {
    const dateObj = new Date(date)
    const month = dateObj.getUTCMonth() + 1 //months from 1-12
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    return `${month}.${day}.${year}`
  }

  return (
    <div id="table">
      {data.map((item, index) => (
        <>
          <div key={index} className="row">
            <span className="cell">{item.mantras_count}</span>
            <span className="cell">{item.name}</span>
            <span className="cell">{formatDate(item.date_created)}</span>
          </div>
          <div className="cell-spacer"></div>
        </>
      ))}
    </div>
  )
}

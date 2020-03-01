import React from 'react'
import '../styles/MantrasHistory.css'

export default function MantrasHistory(props) {
  const { data } = props

  const formatDate = date => {
    const dateObj = new Date(date)
    const month = dateObj.getMonth() + 1 //months from 1-12
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    return `${month}.${day}.${year}`
  }

  const chunkedData = data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 10)
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])

  return (
    <div className="mantras_table">
      {chunkedData.map((data, i) => (
        <div className="table" key={i}>
          {data.map((item, index) => (
            <div key={index} className="row">
              <span className="cell">
                <b>{item.mantras_count}</b>
              </span>
              <span className="cell">{item.name}</span>
              <span className="cell">{formatDate(item.date_created)}</span>
            </div>
            // <div className="cell-spacer"></div>
          ))}
        </div>
      ))}
    </div>
  )
}

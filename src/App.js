import React, { useState, useEffect } from 'react'
import Header from './Components/Header.jsx'
import MantrasAmount from './Components/MantrasAmount.jsx'
import MantrasForm from './Components/MantrasForm.jsx'
import MantrasHistory from './Components/MantrasHistory.jsx'
import './styles/App.css'
import MantrasIntro from './Components/MantrasIntro.jsx'
import Footer from './Components/Footer.jsx'
import Loader from './Components/Loader.jsx'

function App() {
  const [data, setData] = useState([])
  const [allMantras, setAllMantras] = useState({})
  const [inputData, setinputData] = useState({ name: '', mantras_count: '' })
  const [mode, setMode] = useState()

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          'https://578hkotcwh.execute-api.us-east-1.amazonaws.com/production/mantras'
        )
        const resJson = await response.json()
        const mantrasAmount = resJson.reduce((a, b) => ({
          mantras_count: a.mantras_count + b.mantras_count
        }))
        const sortedData = resJson.sort(function(a, b) {
          return new Date(b.date_created) - new Date(a.date_created)
        })
        setData(sortedData)
        setAllMantras(mantrasAmount)
      } catch (err) {
        console.error('Error fetching:', err)
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)')
    function setThemeMode(e) {
      if (e.matches) {
        setMode('Dark')
      } else {
        setMode('Light')
      }
    }
    darkMode.addListener(setThemeMode)
  }, [mode])

  const handleChange = event => {
    setinputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!inputData.name) inputData.name = 'Friend'
    if (inputData.mantras_count === '') {
      alert('Please add mantras.')
      return
    }
    data.unshift({
      ...inputData,
      date_created: new Date().toISOString()
    })
    setData(data)
    setAllMantras({
      mantras_count:
        allMantras.mantras_count + parseInt(inputData.mantras_count)
    })
    fetch(
      'https://578hkotcwh.execute-api.us-east-1.amazonaws.com/production/mantras',
      {
        method: 'POST',
        body: JSON.stringify(inputData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).catch(err => console.log('Error:', err))

    setinputData({ name: '', mantras_count: '' })
  }

  return (
    <div className="App">
      <Header />
      <MantrasIntro />
      {data && allMantras.mantras_count ? (
        <>
          <MantrasAmount allMantras={allMantras} />
          <MantrasForm
            inputData={inputData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <MantrasHistory data={data} />
        </>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  )
}

export default App

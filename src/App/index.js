import React, { memo } from 'react'
import { Button } from 'antd'
import { capitalize } from 'lodash'
import logo from './logo.svg'
import './App.css'

const App = memo(() => {
  const openDocs = () => window.open('https://reactjs.org', '_blank')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > */}
        <Button type="primary" onClick={openDocs}>
          {capitalize('Learn React')}
        </Button>
        {/* </a> */}
      </header>
    </div>
  )
})

App.displayName = 'Main'

export default App

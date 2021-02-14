import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import PictureGrid from './components/PictureGrid'

export default function App() {
  return (
    <React.Fragment>
        <NavigationBar />
        <PictureGrid />
    </React.Fragment>
  )
}
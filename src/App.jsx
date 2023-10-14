import React from 'react'
import Home from './pages/home/Home'
import Tables from './shared/components/tables/Tables';
import Alert from './shared/components/alert/Alert';
import Button from './shared/components/button/Button';
import Spinners from './shared/components/spinners/Spinners';
const App = () => {
  const action = () => {
    console.log('clicked')
  }
  return (
    <>
      <Spinners textEnable={true} style={{"width":"150px","height":"150px"}}/>
    </>
  )
}

export default App;

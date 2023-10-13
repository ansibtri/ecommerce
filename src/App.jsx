import React from 'react'
import Home from './pages/home/Home'
import Tables from './shared/components/tables/Tables';
import Alert from './shared/components/alert/Alert';
const App = () => {
  return (
    <>
      <Alert title="Account Created Successfully" action={true} dismiss={true} severity={"success"}/>
      {/* <Alert title="Error "severity={"error"}/> */}
      {/* <Alert title="Warning!" severity={"warning"}/> */}
      {/* <Alert "severity={"info"}/> */}
    </>
  )
}

export default App;

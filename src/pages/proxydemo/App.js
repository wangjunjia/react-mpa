import React from 'react'
import './App.less'

import axios from 'axios'
import { Button } from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  fetchListHandle = () => {
    axios
      .get(`/api/other/aliPayAndBankWithdrawApply/withdrawList?pn=0&startTime=&endTime=&limit=10&searchUid=&status=`, {
        withCredentials: true,
      })
      .then(res => {
        console.log('fetch list res', res)
      })
      .catch(err => {
        console.log('fetch list error', err)
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={this.fetchListHandle}>Click me</Button>
        </header>
      </div>
    )
  }
}

export default App

import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ModeContext from './context/ModeContext'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

class App extends Component {
  state = {isDark: false}

  changeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ModeContext.Provider value={{isDark, changeMode: this.changeMode}}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App

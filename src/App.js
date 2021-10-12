import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PrivateRoute from './privateRoute'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/Login'>
            <Login />
          </Route>
          <PrivateRoute exact path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

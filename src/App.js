import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import UserProfileRoute from './components/UsersProfileRoute'
import MyProfileRoute from './components/MyProfileRoute'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/users/:userId" component={UserProfileRoute} />
    <ProtectedRoute exact path="/my-profile" component={MyProfileRoute} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App

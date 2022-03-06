import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Friends from './components/Friends';
import Videos from './components/Videos';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Menu from './components/Menu';
import FBLogin from './components/FBLogin';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Route>
        <Route path="/login/facebook" element={<FBLogin/>}/>
      </Routes>
    </Router>
  </>
}

export default App;

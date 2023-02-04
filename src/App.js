import './App.css';
import './Styles.css';
import { Route , Routes , BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Navbar';
import Blogs from './components/Blogs';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route path="/blogs" element={<><Blogs/></>}></Route>
          {/* <Route path="*"><Notfound/></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

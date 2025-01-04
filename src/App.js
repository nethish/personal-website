import './App.css';
import Header from './Header'

import Demo from './pages/demo/Demo'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import { useLocation } from 'react-router-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<div>

    <div className="grid-flow-row main-layout h-full">
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div> 

    </div>
  </div>

  )
}

export default App;

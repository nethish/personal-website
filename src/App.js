import './App.css';
import Header from './Header'

import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Work from './pages/work/Work'
import { useLocation } from 'react-router-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="flex flex-col h-full">
      <Header />

      <div className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div> 

    </div>

  )
}

export default App;

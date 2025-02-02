import './App.css';
import Header from './Header'

import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import BlogHome from './pages/blog/BlogHome'
import Work from './pages/work/Work'
import { useLocation } from 'react-router-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const routes = []
  routes.push(<Route path="/" element={<Home />} />)
  routes.push(<Route path="/blog" element={<BlogHome />} />)
  routes.push(<Route path="/work" element={<Work />} />)

  routes.push(getBlogRoutes())

  return (

    <div className="flex flex-col h-full">
      <Header />

      <div className='flex-grow'>
        <Routes>
          {routes}
        </Routes>
      </div>

    </div>

  )
}

function getBlogRoutes() {
  let routes = []
  routes.push(<Route path="/blog/first" element={<Blog name="first"/>} />)

  return routes
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/location" element={<Location />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

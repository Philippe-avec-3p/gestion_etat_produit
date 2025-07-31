import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Equipment from './pages/Equipment'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'


function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <Banner />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/equipment" element={<Equipment />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}


export default App
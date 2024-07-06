

import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Portifolio from './components/Portifolio/Portifolio'
import Services from './components/Services/Services'
import ToastProvider from './providers/toast'

function App() {


  return (
    <>
      <ToastProvider>
        <Header />
        <Home />
        <About />
        <Services />
        <Portifolio />
        {/* <Contact /> */}
        <Footer />
      </ToastProvider>
    </>
  )
}

export default App

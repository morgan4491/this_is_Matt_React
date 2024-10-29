import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {

  return (
    <>
      <Header />

      <section> 
        <Routes>

          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/resume" element={<Resume />}/>

        </Routes>

      </section>

      <Footer />

    </>
  )
}

export default App

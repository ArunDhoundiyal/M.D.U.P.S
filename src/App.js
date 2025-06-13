import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'; 
import OurTeam from './Components/OurTeam';
import Home from './Components/Home';
import NewsArticles from './Components/NewsArticles';
import AboutUs from './Components/AboutUs';
import ScrollToTop from './Components/ScrollToTop';
import Donation from './Components/Donation';
import Gallery from './Components/Gallery';
import JoinOurTeam from './Components/JoinOurTeam';
import NotFound from './Components/NotFound';
import AosWrapper from './Components/AosWrappper';

const App = () => {
  return(
    <AosWrapper>
    <BrowserRouter>
    <ScrollToTop>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/our-team" element={<OurTeam />} />
    <Route path='/news-&-articles' element={<NewsArticles/>} />
    <Route path='/about-us' element={<AboutUs/>} />
    <Route path='/donation' element={<Donation/>} />
    <Route path='/gallery' element={<Gallery/>} />
    <Route path='/join-our-team' element={<JoinOurTeam/>} />
    <Route path='/*' element={<NotFound/>} />
    </Routes>
    </ScrollToTop>
    </BrowserRouter>
    </AosWrapper>
  )
}

export default App
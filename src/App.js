import {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'; 
import Loader from './Components/Loader';
import AosWrapper from './Components/AosWrappper';
const OurTeam = lazy(()=> import('./Components/OurTeam'));
const Home = lazy(()=>import('./Components/Home'));
const NewsArticles = lazy(()=>import('./Components/NewsArticles'));
const  AboutUs = lazy(()=>import('./Components/AboutUs'));
const ScrollToTop = lazy(()=>import('./Components/ScrollToTop'));
const Donation = lazy(()=>import('./Components/Donation'));
const Gallery = lazy(()=>import('./Components/Gallery'));
const JoinOurTeam = lazy(()=>import('./Components/JoinOurTeam'));
const NotFound = lazy(()=>import('./Components/NotFound'));


const App = () => {
  return(
    <AosWrapper>
    <BrowserRouter>
    <ScrollToTop>
      <Suspense fallback={<Loader />}>
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
    </Suspense>
    </ScrollToTop>
    </BrowserRouter>
    </AosWrapper>
  )
}

export default App
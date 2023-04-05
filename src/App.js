// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon , solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import Info from './components/Info/Index';
import Header from './components/Header/Index';
import Landing from './components/Landing/Index';
import Featured from './components/Featured/Index';
import Promotion from './components/Promotion/Index';
import Popular from './components/Popular/Index';
import Trending from './components/Trending/Index';
import Journal from './components/Journal/Index';
import Social from './components/Social/Index';
import Footer from './components/Footer/Index';
import { useEffect, useState } from 'react';


function App() {

    var [landing, setLanding] = useState()
    var [featured, setFeatured] = useState()
    var [popular, setPopular] = useState()
    var [trending, setTrending] = useState()
    var [journal, setJournal] = useState()

    useEffect(() => {
        fetch("data.json").then(res => res.json())
        .then(data => {
            setLanding(data.landing)
            setFeatured(data.featured)
            setPopular(data.popular)
            setTrending(data.trending)
            setJournal(data.journal)
        })

    }, [])


  return (
    <div className="App">
      <Info />
      <Header />
      <Landing info={landing} />
      <Featured info={featured} />
      <Promotion />
      <Popular info={popular} />
      <Trending info={trending} />
      <Journal info={journal} />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
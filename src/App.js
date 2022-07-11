import React, { useState } from 'react'
import './App.css';
import Characters from './Components/Characters';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Testing from './Components/Testing';
import About from './Components/About';
import Episodes from './Components/Episodes';
import Footer from './Components/Footer';

function App() {
  const [query, setQuery] = useState('')
  const [currpage ,setCurrpage] = useState('episodes')
  return (
    <div>

    {/* <Testing /> */}


     {currpage === 'explore' && 
     <>
     <Header />
     <Navbar 
     currpage={currpage}
     setCurrpage ={setCurrpage}
     />
     <About />
     <Search setQuery={setQuery} />
     <Characters query={query}/>
     <Footer />
     </>
     }

     {currpage === 'episodes' && 
      <>
      <Header />
      <Navbar 
      currpage={currpage}
      setCurrpage ={setCurrpage}
      />
      <Episodes />
      <Footer />
      </>
     }
     
    </div>
  );
}

export default App;

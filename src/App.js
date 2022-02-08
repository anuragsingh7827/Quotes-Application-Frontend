import React, {Fragment} from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import ShowQuote from './components/pages/ShowQuote';


const App = () => {
  return (
    <Fragment>
      <header>
        <MainNavigation/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AllQuotes/>}/>
          <Route path="/new" element={<NewQuote/>}/>
          <Route path="/:quoteid" element={<ShowQuote/>}/>
        </Routes>
      </main>
      
    </Fragment>
  )
}

export default App


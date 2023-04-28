import React from 'react'
import Header  from './components/Header';
import Main from './components/Main';
import Top from './components/Top/intex';
import LiveAuction from './components/LiveAuction';
import Collection from './components/Collection/intex';
import Artworks from './components/Artworks';
import Info from './components/Info/intex';
import Creator from './components/Creator/intex';
import Footer from './components/Footer/intex';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Top />
      <LiveAuction />
      <Collection />
      <Artworks />
      <Info />
      <Creator />
      <Footer />
    </>
  )
}

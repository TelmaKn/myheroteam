import React from 'react'
import ResultsSearch from '../../components/ResultsSearch/ResultsSearch'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Stats from '../../components/Stats/Stats'
import MyTeam from '../../components/MyTeam/MyTeam'
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Stats />
      <MyTeam />
      <SearchBar />
      <ResultsSearch />
      <Footer />
    </>
  )
}

export default Home

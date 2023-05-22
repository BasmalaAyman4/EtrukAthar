import React, { useEffect, useState } from 'react'
import Navbar from './Components/Global/Navbar/NavbarMenu'
import Footer from './Components/Global/Footer/Footer'
import Router from './Router/Router';

// import DonateNow from './Components/Global/DonateNow/DonateNow'
import { AuthProvider } from './Components/Context/AuthContext';
import Loading from './Components/Loading/Loading';
import { useLocation } from 'react-router-dom';



function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  const [IsLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {IsLoading ?
        <Loading />
        :
        <>
          <Navbar />
          {/* <DonateNow /> */}
          <Router />
          <Footer />
        </>
      }
    </div>
  );
}

function AppWithStore() {
  return (

    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWithStore;

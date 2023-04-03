
import './App.css';
import Navbar from './Components/Global/Navbar/NavbarMenu'
import Footer from './Components/Global/Footer/Footer'
import Router from './Router/Router';
import { AuthProvider } from './Components/Context/AuthContext';
import DonateNow from './Components/Global/DonateNow/DonateNow'


function App() {
  return (
    <>
      <Navbar />
      <DonateNow />
      <Router />
      <Footer />
    </>
  );
}

function AppWithStore() {
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;

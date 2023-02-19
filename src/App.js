
import './App.css';
import Navbar from './Components/Global/Navbar/NavbarMenu'
import Footer from './Components/Global/Footer/Footer'
import Router from './Router/Router';
import { AuthProvider } from './Components/AuthContext';


function App() {
  return (
    <>

      <Navbar />
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

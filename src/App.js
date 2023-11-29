import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className='digi-app'>
      <Navbar />
      {/* <Signup /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;

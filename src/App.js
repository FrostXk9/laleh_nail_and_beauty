import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage';
import NavgationBar from './Components/NavigationBar';
import AboutPage from './Components/AboutPage';
function App() {
  return (
    <div className="App">
      <header>
        <NavgationBar/>
      </header>
      <main>
        <section id="home">
         <LandingPage />
        </section>
        <section id="about">
         <AboutPage />
        </section>
      </main>
    </div>
  );
}

export default App;

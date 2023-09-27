import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import GrowthPlan from './components/GrowthPlan';
import WhitePaper from './components/WhitePaper';

function App() {
  return (
    <div >
      <Navbar/>
      <About/>
      <GrowthPlan/>
      <WhitePaper/>
    </div>
  );
}

export default App;

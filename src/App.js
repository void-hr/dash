import './App.css';

import SideBar from './components/LeftSideBar/SideBar';
import TwoContainer from './components/ChartWidgets/TwoContainer';
import NavBar from './components/NavBar/NavBar';
import SlimContainer from './components/ChartWidgets/SlimContainer';
import ThreeContainer from './components/ChartWidgets/ThreeContainer';


function App() {
  return (
    <>
    <NavBar/>
    <SideBar/>
    <SlimContainer/>
    <TwoContainer/>
    <TwoContainer/>
    <ThreeContainer/>
    </>
  );
}

export default App;

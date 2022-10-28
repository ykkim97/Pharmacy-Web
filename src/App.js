import './App.css';
import GetData from './components/GetData';
import Map from './components/Map';
import Templete from './components/Templete';

function App() {
  return (
    <Templete className="App">
      <GetData />
      <Map />
    </Templete>
  );
}

export default App;

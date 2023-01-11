import './App.css';
import Viewpager from './Viewpager';
import Navigation from './Navigation';


function App() {
  return (
    <div className="App">
        <Navigation title={'To Do'} />
        <Viewpager />
    </div>
  );
}

export default App;

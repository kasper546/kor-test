import './App.css';
import LeftPartCompoment from '../src/components/LeftPartComponent.js';
import RightPartCompoment from '../src/components/RightPartComponent.js';
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap" rel="stylesheet"></link>
function App() {
  return (
    <div className="App">
      <LeftPartCompoment />
      <RightPartCompoment />
    </div>
  );
}

export default App;

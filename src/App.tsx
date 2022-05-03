import { MainCanvas, Sidebar } from './components/exports';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar position="left" />
      <MainCanvas />
      <Sidebar position="right" />
    </div>
  );
}

export default App;

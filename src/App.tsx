import { MainCanvas, Sidebar } from './components/exports';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainCanvas />
      <Sidebar />
    </div>
  );
}

export default App;

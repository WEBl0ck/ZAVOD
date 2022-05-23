import { Toaster } from 'react-hot-toast'
import { MainCanvas, Sidebar } from './components/exports'

import './App.css'

function App() {
  return (
    <div className="App">
      <Sidebar position="left" />
      <MainCanvas />
      <Sidebar position="right" />
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App

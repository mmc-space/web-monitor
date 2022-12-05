import { browserMonitor } from '@web-monitor/browser'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const test = () => {
    browserMonitor.init({
      baseUrl: 'https://www.mmszb.cn',
      errors: ['runtime'],
      appKey: 'mmc-test',
    })
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs" onClick={test}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

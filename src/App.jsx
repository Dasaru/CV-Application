import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <hr />
      <GeneralInfo />
      <hr />
      <Education />
      <hr />
      <Experience />
    </>
  )
}

export default App

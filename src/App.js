import './App.css';
import Display from './Display.js'



function Title(){
  return (
    <div>
      <h2>Form Validator</h2>
    </div>
  )
}

function RefreshBtn() {
  function refreshPage() {
    window.location.reload()
  } 
  return (
    <div>
      <button type="submit" onClick={() => refreshPage()}>Refresh/New File</button>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <div className="header">
        < Title />
        < RefreshBtn />
      </div>
      < Display />
    </div>
  );
}

export default App;

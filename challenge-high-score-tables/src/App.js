 import './App.css';
 import ScoreBoard from './ScoreBoard';

 import allCountryScores from './scores';

function App() {
  return (
    <div className="App">
      <div className="outerBox">
        <h1>High Scores Per Country</h1>

        <ScoreBoard scoresData={allCountryScores}/>
      </div>
    </div>
  );
}

export default App;

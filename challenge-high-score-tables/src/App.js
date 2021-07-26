 import './App.css';
 import ScoreBoard from './ScoreBoard';

 import allCountryScores from './scores';

function App() {
  return (
    <div className="App">
      <div className="">
        <h3>Scores Per Country</h3>

        <ScoreBoard scoresData={allCountryScores}/>
      </div>
    </div>
  );
}

export default App;

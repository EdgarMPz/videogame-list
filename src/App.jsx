import "./App.css";
import Card from "./components/card";
import videogames from "./data/games";

function App() {
  const videogamesList = videogames.map((videogame) => {
    return (
      <Card
        title={videogame.name}
        year={videogame.year}
        developer={videogame.developer}
        publisher={videogame.publisher}
      />
    );
  });

  return (
    <div className="App">
      <h1>Favorite videogames</h1>
      <div className="container">{videogamesList}</div>
    </div>
  );
}

export default App;


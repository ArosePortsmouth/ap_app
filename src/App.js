import './App.css';
import test from './dummy.json';
function App() {
  return (
    <div className="App">
      <header>ToDo App</header>
      <body>
        {test.map(({Title, Description}) => (
          <p key={Title}>{Title}: {Description}</p>
        ))}
      </body>
      <footer><button>Submit</button></footer>
    </div>
  );
}

export default App;

import './App.css';
import test from './dummy.json';
import DriverCreateBees from './funct';

function App() {
  return (
    <div className="App">
      <header>ToDo App</header>
      <body>
        {test.map(({Title, Description}) => (
          <p key={Title}>{Title}: {Description}</p>
        ))}
      </body>
      <footer><button onClick= {/*App.append*/(DriverCreateBees)}>Submit</button></footer>
      
    </div>
  );
}


export default App;

import './App.css';
import Header from './components/Header';
import List from './components/List'


function App() {
  return (
    <div className="App">
        <header>
          <Header />
        </header>
        
        <section>
          <List />
        </section>
    </div>
  );
}

export default App;

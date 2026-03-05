import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <main className="max-w-6xl mx-auto">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;

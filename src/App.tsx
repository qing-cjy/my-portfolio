import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      className="App bg-[#FDFBF7] font-sans"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Hero />
      <Projects />
    </motion.div>
  );
}

export default App;

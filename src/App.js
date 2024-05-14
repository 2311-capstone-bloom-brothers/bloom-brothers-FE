import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home news={news} removeSpaces={removeSpaces}/>} />
    </Routes>
  );
}

export default App;

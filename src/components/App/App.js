import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import Landing from '../Landing/Landing';
import seedlings from '../../seedlings-dummy';

function App() {

 

  return (
    <Routes>
      <Route path='/' element={<Landing seedlings={seedlings}/>} />
    </Routes>
  )
}

export default App;

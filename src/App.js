import {
  Routes,
  Route
} from 'react-router-dom';

import CreateClassComponent from "./components/intro";
import OtherClassComponent from './components/useState';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <CreateClassComponent /> } />
        <Route path='/other-example' element={ <OtherClassComponent /> } />
      </Routes>
    </>
  );
}

export default App;

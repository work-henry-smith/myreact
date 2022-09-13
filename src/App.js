import {AiFillBug} from 'react-icons/ai';
import AddAppointment from './components/AddAppointment';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!!! <AiFillBug /></h1>
      <Search />
      <AddAppointment />
    </div>
  );
}

export default App;

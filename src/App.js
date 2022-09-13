import {AiFillBug} from 'react-icons/ai';
import AddAppointment from './components/AddAppointment';
import Search from './components/Search';
import List from './data.json';
import PropList from './components/PropList'

function App() {
  return (
    <div className="App">
      <h1>Hello, World!!! <AiFillBug /></h1>
      
      <AddAppointment />

      <Search />

      <ul className='divide-y divide-gray-200'>
        {List.map(appointment => (<PropList key={appointment.id} appointment={appointment} />))}
      </ul>

    </div>
  );
}

export default App;

import Navbar from './components/navbar';
import ContactList from './views/contactList'
import './App.css';


const list=[{name:'Rihab', email:'Rihab@gmail.com', _id:0}]

function App() {
  return (
    <div className="App">
<Navbar/>
<ContactList  list={list}  />
    </div>
  );
}

export default App;

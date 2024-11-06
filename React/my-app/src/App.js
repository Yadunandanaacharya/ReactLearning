import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  let greet = <b>Good morning</b>;
  return (
    <>
    <Navbar title="RamRam" links="Links"/>
    <TextForm heading="Enter the text to modify" />
    </>
  );
}

export default App;
 

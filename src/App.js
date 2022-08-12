import logo from './logo.svg';
import './App.css';
import {decrement,increment} from './actions/index';
import {useSelector,useDispatch} from 'react-redux'

function App() {

  const counter =useSelector((state) =>state.counter)
  const dispatch =  useDispatch()
  return (
    <div className="container">
      <h1>REDUX COUNTER</h1>
    
    <h1>Counter {counter}</h1>
    <button className="btnincrement" onClick={() =>dispatch(increment())}> + </button>
    <button className="btndecrement"  onClick={() =>dispatch(decrement())}> - </button>
    </div>
  );
}

export default App;

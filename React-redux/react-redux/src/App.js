import logo from './logo.svg';
import './App.css';
import { Provider , useSelector} from 'react-redux'
import { store } from './redux/store'
import Container from './Components/container';


function App() {
  
  return (
    <Provider store={store} >
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;

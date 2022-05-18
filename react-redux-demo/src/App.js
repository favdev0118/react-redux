import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/cakeContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>   
      <div className="App">
          <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;

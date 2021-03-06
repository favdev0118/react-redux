import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/cakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>   
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;

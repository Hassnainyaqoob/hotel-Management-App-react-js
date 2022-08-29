import { Provider } from 'react-redux';
import './App.css';
import Carousell from './components/carousel';
import store from './config/redux/store';
import Routerings from './config/router/routers';

function App() {
  return (

    <>

      <Provider store={store}>
        <Routerings />
      </Provider>


    </>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Store } from './Store';
import { Provider } from 'react-redux';
import CounterPage from './CounterPage';

function App() {
  return (
    <Provider store={Store}>
      <CounterPage />
    </Provider>
  );
}

export default App;

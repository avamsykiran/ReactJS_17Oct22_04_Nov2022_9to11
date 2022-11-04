import {Fragment} from 'react';
import Header from './components/Header';
import Inventory from './components/Inventory';

const App = () => {
  return (
    <Fragment>
      <Header brand="Inventory Management App" />
      <div className='container-fluid p-4'>
        <Inventory />
      </div>
    </Fragment>
  );
}

export default App;

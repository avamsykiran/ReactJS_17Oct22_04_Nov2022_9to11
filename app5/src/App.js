import {Fragment} from 'react';
import CCounter from './components/CCounter';
import FCounter from './components/FCounter';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <Header brand="Lifecycle methods and Hooks demo" />
      <div className='container-fluid p-4'>
        <div className='row'>
          <CCounter />
          <FCounter />
        </div>
      </div>
    </Fragment>
  );
}

export default App;

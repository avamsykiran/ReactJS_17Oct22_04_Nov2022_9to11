import {Fragment} from 'react';
import Header from './components/Header';
import Loan from './components/Loan';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Fragment>
      <Header brand="My React App 2.0" />
      <Welcome />
      <Loan />
    </Fragment>
  );
}

export default App;

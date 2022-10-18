import { Fragment } from 'react';
import Counter from './components/Counter';
import Friends from "./components/Friends";
import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <Header banner="React Project 01" />
      <Friends />
      <Counter />
    </Fragment>
  );
}

export default App;

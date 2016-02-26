import React           from 'react';

import './reset.css';
import styles          from './App.css';

import { RotatorFull } from 'components/RotatorFull';

export class App extends React.Component {
  render() {
    return (
      <div className = { styles.root }>
        <RotatorFull />
        <a
          className = { styles.github }
          href="https://github.com/askd/animakit-rotator"
          target="_blank"
        >Fork me on GitHub</a>
      </div>
    );
  }
}

import * as React from 'react';

import './App.scss';
import TopTunesContainer from './Modules/TopTunes/Components/TopTunesMainView/TopTunesMainView';


class App extends React.PureComponent {
  render() {
    return (
      <div className='container--main'>
        <TopTunesContainer/>
      </div>
    );
  }
}

export default App;

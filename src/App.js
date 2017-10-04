import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Execute } from '@gooddata/react-components';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      workspace: 'la84vcyhrq8jwbu4wpipw66q2sqeb923',
      afm: {
        measures: [
          {
            id: 'single-measure',
            definition: {
              baseObject: {
                id: 'aaeb7jTCfexV'
              }
            }
          }
        ]
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <Execute afm={this.state.afm} projectId={this.state.workspace}
                   onLoadingChanged={handleLoadingChanged}
                   onError={(err) => <div>err</div>} >
            {
              (executionResult) => {
                <div>blah</div> //JSON.stringify(executionResult)
              }
            }
          </Execute>
        </div>

      </div>
    );

    function handleLoadingChanged(result) {
      <div>loading change</div>
    }
  }
}

export default App;





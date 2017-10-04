import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Execute } from '@gooddata/react-components';

// A component to render the single metric
const Metric = ({content}) => {
  console.log(content);
  return (
    <div>{`Metric: ${content.result.rawData[0]}`}</div>
  )
}

// An error component -- never seems to be called
const Error = ({err}) => {
  console.log(`ERROR: ${err}`);
  return (
  <div style="color: red;">{`ERROR: ${err}`}</div>
)}

// The main aplication component
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
                     onError={(err) => <Error>{err}</Error>} >
                     {(result) =>
                       <Metric content={result}></Metric>
                     }
            </Execute>
        </div>

      </div>
    );

    // I'm not really sure how this callback is supposed to be used
    function handleLoadingChanged(result) {
      console.log("loading change", result)
    }
  }
}

export default App;

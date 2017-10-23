import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Metric from './Metric';
import {Execute} from '@gooddata/react-components';

// The main application component
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
      },
      transformation: {
        measures: [
          {
            id: 'single-measure',
            title: props.title,
            format: "#,##0.00"
          }
        ]
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <Execute projectId={this.state.workspace} afm={this.state.afm} transformation={this.state.transformation}
                   onLoadingChanged={(loading) => console.log(loading)}
                   onError={(err) => console.log(`Error: ${err}`)} >
            {(result) => <Metric data={prepare(result)}/> }
          </Execute>
        </div>
      </div>
    );

    function prepare(result) {
      console.log(result)
      var data = {
        isLoading: false,
        error: null,
        name: "Unknown",
        value: result.result.rawData[0][0]
      }
      return (
        data
      )
    }
  }
}

export default App;



import React, {Component} from 'react';
import numeral from 'numeral'
import logo from './logo.svg';
import './App.css';
import Metric from './Metric';
import {Kpi, Execute} from '@gooddata/react-components';
import C from './catalog.json';

// The main application component
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      workspace: 'la84vcyhrq8jwbu4wpipw66q2sqeb923',
      afm: {
        measures: [
          {
            id: 'won',
            definition: {
              baseObject: {
                id: C.metrics['Won'].identifier
              }
            }
          },
          {
            id: 'lost',
            definition: {
              baseObject: {
                id: C.metrics['Lost'].identifier
              }
            }
          }
        ],
        attributes: [
          { id: 'oppclose.aci81lMifn6q' }
        ]
      },
      // TODO: How can we handle localization?
      transformation: {
        measures: [
          {
            id: 'won',
            title: 'Won',
            format: "$#,##0"
          },
          {
            id: 'lost',
            title: 'Lost',
            format: "$#,##0"
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

        <div style={{display: this.state.isLoading ? "block" : "none"}} className="status">
          Loading...
        </div>

        <div>
          <Execute projectId={this.state.workspace} afm={this.state.afm} transformation={this.state.transformation}
                   onLoadingChanged={(loading) => this.setState(loading)}
                   onError={(err) => {console.log(err); this.setState(err)}} >
            {(result) => <Metric data={prepare(result)} loading={this.state.isLoading} error={this.state.error} /> }
          </Execute>
        </div>
      </div>
    );

    function prepare(result) {
      console.log(result)
      const value = result.result.rawData[6][1]
      const format = result.result.headers[1].format
      return ({
        name: result.result.headers[1].title,
        value,
        formatted: numeral(value).format(format)
      })
    }
  }
}

export default App;



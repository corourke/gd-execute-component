import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Metric.css'


// A stateless component to render a single metric

class Metric extends Component {

  render() {
    console.log("Render: ", this.props);
    if(this.props.error) {
      return (
        <div className="metric metric--state-error">
          <div className="metric-value">{this.props.error}</div>
          <div className="metric-label">Error</div>
        </div>
      )
    } else if (this.props.isLoading === true) {
        return (
          <div className="metric metric--state-loading">
            <div className="metric-label">Loading...</div>
          </div>
        )
      } else {
        return (
          <div className="metric">
            <div className="metric-label">{`${this.props.data.name}`}</div>
            <div className="metric-value">{this.props.data.value}
            </div>
          </div>
        )
      }
    }
}

Metric.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string
  })
};

export default Metric

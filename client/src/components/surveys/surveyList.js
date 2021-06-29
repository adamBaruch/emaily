import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(surveys => {
      return (
        <div className="card darken-1" key={surveys._id}>
          <div className="card-content text-white">
            <span className="card-title">{surveys.title}</span>
            <p>
              {surveys.body}
            </p>
            <p className="right">
              Sent 0n: {new Date(surveys.dateSent).toLocaleDateString()}
            </p>
            </div>
          <div className="card-action">
            <a>Yes: {surveys.yes}</a>
            <a>No: {surveys.no}</a>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
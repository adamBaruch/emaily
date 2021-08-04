import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Card from 'react-bootstrap/Card';
import ProgressBar from "react-bootstrap/ProgressBar";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(surveys => {
      return (
        //   <div className="card darken-1" key={surveys._id}>
        //     <div className="card-content text-white">
        //       <span className="card-title">{surveys.title}</span>
        //       <p>
        //         {surveys.body}
        //       </p>
        //       <p className="right">
        //         Sent 0n: {new Date(surveys.dateSent).toLocaleDateString()}
        //       </p>
        //     </div>
        //     <div className="card-action">
        // <div>Yes: {surveys.yes}
        //   <div className="progress" style={{ maxWidth: '300px' }}>
        //     <div className="determinate" style={{ width: surveys.yes / (surveys.yes + surveys.no) * 300 }}>

        //     </div>
        //   </div>
        // </div>
        //       <div>No: {surveys.no}
        //         <div className="progress" style={{ maxWidth: '300px' }}>
        //           <div className="determinate" style={{ width: surveys.no / (surveys.yes + surveys.no) * 300 }}>

        //           </div>
        //         </div>
        //       </div>
        //       <a className="right" style={{marginBottom: '20px'}}>
        //         Delete
        //       </a>
        //     </div>
        //   </div>
        <Card key={surveys._id} style={{ padding: '20px', maxWidth: '700px'}}>
          <Card.Body>
            <Card.Title>{surveys.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <p>
                {surveys.body}
              </p>
              <p className="right">
                Sent 0n: {new Date(surveys.dateSent).toLocaleDateString()}
              </p>
            </Card.Subtitle>
            <div>
            <div style={{ maxWidth: '300px' }}>
              Yes: {surveys.yes}
              <ProgressBar variant="success" now={surveys.yes / (surveys.yes + surveys.no) * 100} />
            </div>
            <div >
              No: {surveys.no}
              <ProgressBar variant="info" now={surveys.no / (surveys.yes + surveys.no) * 100} />
            </div>
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <a className="right" >Delete Survey</a>
            </div>
          </Card.Body>
        </Card>
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
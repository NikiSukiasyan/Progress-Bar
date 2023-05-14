import React from "react";
import "./ProgressBar.css";
import "bootstrap/dist/css/bootstrap.css";

function ProgressBar(props) {
  return (
    <>
      <h1>Progress Bar</h1>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${props.progress}%` }}
          aria-valuenow={props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.progress}
        </div>
      </div>

      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          style={{ width: `${props.progress}%` }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.progress}
        </div>
      </div>

      <div class="progress">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style={{ width: `${props.progress}%` }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.progress}
        </div>
      </div>
    </>
  );
}

export default ProgressBar;

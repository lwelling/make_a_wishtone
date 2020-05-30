import React, { useState } from "react";
import { ProgressBar, Form } from "react-bootstrap";

import firebase from "../firebase";

const Upload = ({ user }) => {
  const [now, setNow] = useState(0);
  const [valid, setValid] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];

    const storageRef = firebase
      .storage()
      .ref("wishes/" + user.uid + "/" + file.name);

    const task = storageRef.put(file);

    task.on(
      "state_changed",

      function progress(snapshot) {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setNow(Math.ceil(percentage));
      },
      function error(err) {
        alert("Upload failed!")
      },
      function complete() {
        setValid(true);
      }
    );
  };

  return (
    <div className="upload-container">
      {now > 0 ? (
        <ProgressBar style={{ minWidth: "45%" }} now={now} label={`${now}%`} />
      ) : null}
      <div className="file-upload">
        <Form>
          <div className="mb-3">
            <Form.File id="snapshot" custom>
              <Form.File.Input isValid={valid}  onChange={handleFileSelect} />
              <Form.File.Label data-browse="Choose File">
                Upload your Wish!
              </Form.File.Label>
              <Form.Control.Feedback type="valid">
                You Wished!
              </Form.Control.Feedback>
            </Form.File>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Upload;

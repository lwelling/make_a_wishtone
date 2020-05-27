import React from "react";

import { Form, Button } from "react-bootstrap";

export default function CallToAction() {
  const fakeMsg = "This is a dummy form! Gotcha!"
  return (
    <div className="white-slot">
      <Form onSubmit={() => alert(fakeMsg)} className="description-box-white">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="cursive-font">
            <h1>Stay up-to-date with us!</h1>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter your email..." />
          <Form.Text className="text-muted">
            We won't share your email.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

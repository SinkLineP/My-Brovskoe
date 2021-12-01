import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';

class Modalauth extends Component {
  constructor(props) {
    super(props);
  }

  hiddenClick = (e) => {
    // e.preventDefault();
  };

  hiddenSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Authorizate
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.hiddenSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.hiddenClick}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default connect(
  (state) => ({
    storeUsers: state.users,
  }),
  (dispatch) => ({
    onAddUsers: (addUsers) => {
      dispatch({ type: 'ADD_USERS', payload: addUsers });
    },
  })
)(Modalauth);
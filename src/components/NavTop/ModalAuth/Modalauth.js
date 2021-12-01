import React, {Component} from 'react';
import {Alert, Button, Form, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import './styles/Modalauth.scss';

class Modalauth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login",
      alertTitle: '',
      alertVariant: '',
      alertShow: 'hidden-alert',
    }
  }

  loginOrlogout = () => {
    if (this.state.formType === "login") {
      const loginHiddenSubmit = (e) => {
        e.preventDefault();
        const username = e.target.formBasicUsername.value;
        const email = e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;
        const createUsers = {
          username: username,
          email: email,
          password: password,
        }

        this.props.storeUsers.map((item) => {
          if (email !== "" && password !== "" && email === item.email && password === item.password) {
            localStorage.setItem("currentUser", JSON.stringify(createUsers));
            this.props.onCurUser(JSON.parse(localStorage.getItem("currentUser")).username);
            this.props.onHide();
          } else {
            this.setState({
              alertTitle: 'Не верно введена почта или пароль',
              alertVariant: 'danger',
              alertShow: 'mb-3 view-alert',
            })
          }
        })
      }

      return (
        <Form onSubmit={loginHiddenSubmit}>
          <Form.Group className={this.state.alertShow} controlId="formBasicAlert">
            <Alert variant={this.state.alertVariant}>{this.state.alertTitle}</Alert>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control type="name" placeholder="Введите имя пользователя"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control type="email" placeholder="Введите почту"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCreateAccountLink">
            <Form.Label>
              <Button variant="link" onClick={() => {
                this.setState({
                  formType: "register",
                  alertTitle: '',
                  alertVariant: '',
                  alertShow: 'hidden-alert',
                })
              }}>Нажмите чтобы создать аккаунт</Button>
            </Form.Label>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.hiddenClick}>
            Сохранить
          </Button>
        </Form>
      );
    } else if (this.state.formType === "register") {
      const registerHiddenSubmit = (e) => {
        e.preventDefault();
        const username = e.target.formBasicUsername.value;
        const email = e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;
        const confirmPassword = e.target.formBasicConfirmPassword.value;

        if (email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword && username !== "" ) {
          const createUsers = {
            username: username,
            email: email,
            password: password,
          }
          this.props.onAddUsers(createUsers);
          localStorage.setItem("currentUser", JSON.stringify(createUsers));
          this.props.onCurUser(JSON.parse(localStorage.getItem("currentUser")).username);
          this.props.onHide();
        } else {
          this.setState({
            alertTitle: "Не все данные введены",
            alertVariant: "danger",
            alertShow: 'mb-3 view-alert',
          })
        }
      }

      return (
        <Form onSubmit={registerHiddenSubmit}>
          <Form.Group className={this.state.alertShow} controlId="formBasicAlert">
            <Alert variant={this.state.alertVariant}>{this.state.alertTitle}</Alert>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control type="name" placeholder="Введите имя пользователя"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control type="email" placeholder="Введите почту"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Подтвердите пароль</Form.Label>
            <Form.Control type="password" placeholder="Подтвердите пароль"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCreateAccountLink">
            <Form.Label>
              <Button variant="link" onClick={() => {
                this.setState({
                  formType: "login",
                  alertTitle: '',
                  alertVariant: '',
                  alertShow: 'hidden-alert',
                })
              }}>Нажмите если есть аккаунт</Button>
            </Form.Label>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.hiddenClick}>
            Сохранить
          </Button>
        </Form>
      );
    }
  };

  render() {
    console.log(this.state.alertShow);
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
              Авторизация
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.loginOrlogout()}
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
      dispatch({type: 'ADD_USERS', payload: addUsers});
    },
  })
)(Modalauth);
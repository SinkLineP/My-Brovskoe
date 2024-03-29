import React, {useRef, useState} from "react";
import {Alert, Button, Card, Form} from 'react-bootstrap';
import {useAuth} from '../../Contexts/AuthContext';
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError('Не удалось войти')
    }
    setLoading(false)
  }

  return (
    <>
      <Card className="mt-5 mb-5">
        <Card.Body>
          <h2 className="text-center mb-4">Войдите</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="mt-2">Почта</Form.Label>
              <Form.Control type="email" ref={emailRef} placeholder="Введите почту" required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="mt-2">Пароль</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Введите пароль" required/>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">Войти</Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Забыл пароль?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        У вас нет аккаунта? <Link to="/sign-up">Зарегестрироваться</Link>
      </div>
    </>
  )
}

export default Login;
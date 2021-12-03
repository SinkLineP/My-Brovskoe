import React, {useRef, useState} from "react";
import {Alert, Button, Card, Form} from 'react-bootstrap';
import {useAuth} from '../../Contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Пароли не совпадают');
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard")
    } catch {
      setError('Не удалось создать учетную запись')
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Регистрация</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="mt-2">Почта</Form.Label>
              <Form.Control type="email" ref={emailRef} placeholder="Введите почту" required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="mt-2">Пароль</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Введите пароль (мин 6 символов)" required/>
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label className="mt-2">Подтвердите пароль</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} placeholder="Введите ещё раз пароль (мин 6 символов)" required/>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">Зарегистрироваться</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        У вас уже есть аккаунт? <Link to="/login">Войти</Link>
      </div>
    </>
  )
}

export default Signup;
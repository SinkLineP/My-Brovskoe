import React, {useRef, useState} from "react";
import {Alert, Button, Card, Form} from 'react-bootstrap';
import {useAuth} from '../../Contexts/AuthContext';
import {Link} from 'react-router-dom';

function ForgotPassword() {
  const emailRef = useRef();
  const {resetPassword} = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("")
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Проверьте свою почту и следуйте инструкциям')
    } catch {
      setError('Не удалось восстановить пароль')
    }
    setLoading(false)
  }

  return (
    <>
      <Card className="mt-5 mb-5">
        <Card.Body>
          <h2 className="text-center mb-4">Забыл пароль</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="mt-2">Почта</Form.Label>
              <Form.Control type="email" ref={emailRef} placeholder="Введите почту" required/>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">Сбросить пароль</Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Войти</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        У вас нет аккаунта? <Link to="/sign-up">Зарегестрироваться</Link>
      </div>
    </>
  )
}

export default ForgotPassword;
import React, {useRef, useState} from "react";
import {Alert, Button, Card, Form} from 'react-bootstrap';
import {useAuth} from '../../Contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const usernameRef = useRef();
  const {currentUser, updateEmail, updatePassword, updateDisplayName} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Пароли не совпадают")
    }

    setLoading(true)
    setError("")

    const promises = []

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
    if (usernameRef.current.value) {
      promises.push(updateDisplayName({
        displayName: usernameRef.current.value
      }))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/home")
      })
      .catch(() => {
        setError("Не получилось изменить аккаунт")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Card className="mt-5 mb-5">
        <Card.Body>
          <h2 className="text-center mb-4">Изменение профиля</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="mt-2">Почта</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Введите почту"
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label className="mt-2">Имя пользователя</Form.Label>
              <Form.Control type="string" ref={usernameRef} placeholder="Введите имя" required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="mt-2">Пароль</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Введите новый пароль (мин 6 символов)" required/>
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label className="mt-2">Подтвердите пароль</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} placeholder="Повторите пароль (мин 6 символов)" required/>
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">Изменить</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Отмена</Link>
      </div>
    </>
  )
}

export default UpdateProfile;
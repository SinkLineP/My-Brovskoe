import React, {useRef} from "react";
import {Button, Card, Form} from 'react-bootstrap';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Регистрация</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Почта</Form.Label>
              <Form.Control type="email" ref={emailRef} placeholder="Введите почту" required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Введите пароль" required/>
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label>Подтвердите пароль</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} placeholder="Введите ещё раз пароль" required/>
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">Войти</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        У вас уже есть аккаунт? Войти
      </div>
    </>
  )
}

export default Signup;
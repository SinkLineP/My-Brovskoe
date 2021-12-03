import React, {useState} from "react";
import {Alert, Button, Card, Modal} from "react-bootstrap";
import {useAuth} from "../../Contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";
import defaultImageProfile from "./images/profile/default-profile.png";

function Dashboard() {
  const [error, setError] = useState('');
  const {currentUser, logout, deleteAccount, updatePhotoURL} = useAuth();
  const [show, setShow] = useState(false);
  const history = useHistory();

  const promises = []

  if (currentUser.photoURL === null) {
    promises.push(updatePhotoURL({
      photoURL: defaultImageProfile
    }))
  }

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push("/login")
    } catch {
      setError('Не удалось выйти')
    }
  }

  async function handleClose(e) {
    setError("");
    if (e.currentTarget.value === "delete") {
      console.log("deleted account");
      try {
        await deleteAccount();
        history.push("/");
      } catch {
        setError("Не удалось удалить аккаунт")
      }
    }
    setShow(false)
  };
  const handleShow = () => setShow(true);

  function modalConfirmation() {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Подтверждение</Modal.Title>
          </Modal.Header>
          <Modal.Body>Вы действительно хотите удалить профиль?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" value="delete" onClick={handleClose}>
              Да
            </Button>
            <Button variant="secondary" value="no-delete" onClick={handleClose}>
              Нет
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  return (
    <>
      {modalConfirmation()}
      <Card className="mt-5 mb-5">
        <Card.Body>
          <h2 className="text-center mb-4">Профиль</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Фото профиля: </strong>
          <br/>
          <img style={{"width": "25%"}} src={currentUser.photoURL}/>
          <br/>
          <strong className="mb-2">Имя пользователя: </strong>{currentUser.displayName}
          <br/>
          <strong>Почта: </strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Изменить профиль</Link>
          <Button className="btn btn-danger w-100 mt-3" onClick={handleShow}>Удалить профиль</Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button onClick={handleLogout}>Выйти</Button>
      </div>
    </>
  )
}

export default Dashboard;

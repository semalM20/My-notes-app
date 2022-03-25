import React, { useContext, useState } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import NoteContext from "../../context/NoteContext/NoteContext";
import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
import AlertContext from "../../context/AlertContext/AlertContext";
import "./NoteItem.css";

const NoteItem = (props) => {
  const notesC = useContext(NoteContext);

  const alertC = useContext(AlertContext);

  const [show, setShow] = useState(false);

  const [note, setNote] = useState({
    title: props.title,
    desc: props.desc,
    tag: props.tag,
  });

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const saveChanges = () => {
    if (note.title.length > 4 && note.desc.length > 4) {
      notesC.editNote(
        props.id,
        note.title.trim(),
        note.desc.trim(),
        note.tag.trim()
      );
    } else {
      alertC.showAlert(
        "Length of title and description should be minimum 5 characters",
        "danger"
      );
      setNote({ title: props.title, desc: props.desc, tag: props.tag });
    }
    setShow(false);
  };

  const inputHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const dateObj = new Date(props.date);
  const date = dateObj.toDateString();
  const time = dateObj.toLocaleTimeString();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Edit {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={note.title}
                onChange={inputHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="desc"
                rows={3}
                value={note.desc}
                onChange={inputHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                name="tag"
                value={note.tag}
                onChange={inputHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        <div className="note-modal">
          <div className="note-modal-header">
            <div className="modal-info">Edit {props.title}</div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
            {/* <i class="fa fa-times" aria-hidden="true"></i> */}
          </div>
          <div className="note-modal-body">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={inputHandler}
              className="note-modal-input"
            />
            <label>Description *</label>
            <input
              type="textarea"
              name="desc"
              rows={3}
              value={note.desc}
              onChange={inputHandler}
              className="note-modal-input"
            />
            <label>Tag</label>
            <input
              type="text"
              name="tag"
              value={note.tag}
              onChange={inputHandler}
              className="note-modal-input"
            />
          </div>
          <div className="note-modal-footer">
            <button className="modal-btn cancel-btn" onClick={handleClose}>
              Close
            </button>
            <button className="modal-btn save-btn" onClick={saveChanges}>
              <i class="fa fa-check" aria-hidden="true"></i> Save
            </button>
          </div>
        </div>
      </Modal>

      {/* <Card key={props._id} className="text-center">
        <Card.Header>{props.tag}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Button className="me-2" variant="warning" onClick={handleShow}>
            Edit <i className="fa-solid fa-pen-to-square"></i>
          </Button>
          <Button variant="danger" onClick={() => notesC.deleteNote(props.id)}>
            Delete <i className="fa-solid fa-trash"></i>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {date}:{time}
        </Card.Footer>
      </Card> */}
      <div className="notes-card">
        <div className="note-info">
          <div className="note-date">
            {date}:{time}
          </div>
          <div className="note-buttons">
            <i className="fa-solid fa-pen-to-square" onClick={handleShow}></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => notesC.deleteNote(props.id)}
            ></i>
          </div>
        </div>
        <div className="note-title">{props.title}</div>
        <div className="note-desc">{props.desc}</div>
        <div className="note-tag">{props.tag}</div>
      </div>
    </>
  );
};

export default NoteItem;

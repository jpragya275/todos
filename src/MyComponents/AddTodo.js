import React, { useState } from "react";
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3 className="my-3">Add a ToDo</h3>
            <Form onSubmit={submit}>
                <Form.Group controlId="title">
                    <Form.Label>ToDo Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </Form.Group>

                <Form.Group controlId="desc">
                    <Form.Label>ToDo Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
                </Form.Group>
                <Button className="btn btn-sm btn-success" type="submit">
                    Add ToDo
                </Button>
            </Form>
        </div>
    )
}

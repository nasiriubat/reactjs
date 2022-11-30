import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setUsername(localStorage.getItem('Username'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            name,
            username
        }).then(() => {
            history('/read')
        })
    }
    return (
        <div className='component'>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Userame' value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
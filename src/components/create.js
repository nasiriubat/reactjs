import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
    let history = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const postData = () => {
        axios.post(`https://jsonplaceholder.typicode.com/users`, {
            name,
            username
        }).then(() => {
            history('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='First Name' onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Last Name' onChange={(e) => setUsername(e.target.value)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
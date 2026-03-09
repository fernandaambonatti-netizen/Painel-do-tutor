import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Step1Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            history.push('/step2'); // Redirect to Step2
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <Typography variant="h5">Tutor Login</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
            <Link href="#" style={{ marginTop: '16px', display: 'block' }}>
                Forgot Password?
            </Link>
        </div>
    );
};

export default Step1Login;
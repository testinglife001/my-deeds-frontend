import { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            console.log(email,password);
        const res = await axios.post('https://my-deeds-backend.onrender.com/api/auth/admin/login', {
            email,
            password,
        });
        localStorage.setItem('token', res.data.token);
        alert('Login successful!');
        } catch (err) {
        alert(err.response?.data?.msg || 'Login failed');
        }
    };

  return (
    <div>
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default AdminLogin
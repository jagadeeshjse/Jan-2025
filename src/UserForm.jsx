import React, { useState } from 'react';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeUserName = (e) => {
        setUsername(e.target.value);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
            user: username,
            email: email,
            password: password,
        };

        console.log(userData);
    };
    console.log(username);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        onChange={changeUserName}
                        value={username}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={changeEmail}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Enter password"
                        onChange={changePassword}
                        value={password}
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default UserForm;

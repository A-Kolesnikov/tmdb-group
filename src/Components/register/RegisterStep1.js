import React from 'react';

const RegisterStep1 = ({ handleChange, values, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Step 1: User Info</h2>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    onChange={handleChange('username')}
                    value={values.username || ''}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    onChange={handleChange('password')}
                    value={values.password || ''}
                />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default RegisterStep1;

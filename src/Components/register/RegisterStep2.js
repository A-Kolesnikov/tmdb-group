import React from 'react';

const RegisterStep2 = ({ handleChange, values, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Step 2: Preferences</h2>
            <label>
                Favorite Language:
                <input
                    type="text"
                    name="language"
                    onChange={handleChange('language')}
                    value={values.language || ''}
                />
            </label>
            <label>
                Favorite Genre:
                <input
                    type="text"
                    name="genre"
                    onChange={handleChange('genre')}
                    value={values.genre || ''}
                />
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default RegisterStep2;

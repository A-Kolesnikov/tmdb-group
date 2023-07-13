import React from 'react';

const RegisterStep4 = ({ handleChange, values, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Step 4: Voice Preference</h2>
            <label>
                Preferred Voice:
                <input
                    type="text"
                    name="voice"
                    onChange={handleChange('voice')}
                    value={values.voice || ''}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegisterStep4;

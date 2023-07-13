import React from 'react';

const RegisterStep3 = ({ handleChange, values, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Step 3: Gallery Preference</h2>
            <label>
                Preferred gallery:
                <select
                    name="gallery"
                    onChange={handleChange('gallery')}
                    value={values.gallery || ''}
                >
                    <option value="">Choose...</option>
                    <option value="popular">Most Popular</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </label>
            <button type="submit">Next</button>
        </form>
    );
};

export default RegisterStep3;

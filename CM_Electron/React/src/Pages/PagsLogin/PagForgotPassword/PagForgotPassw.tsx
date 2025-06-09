import React from 'react';

const PagForgotPassw: React.FC = () => {
    return (
        <div>
            <h1>Forgot Password</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PagForgotPassw;
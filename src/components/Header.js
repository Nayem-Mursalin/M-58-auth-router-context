import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log("Context : ", user)
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>daisyUI</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user.email && <span>Welcome {user.email}</span>}
                <button className="btn btn-sm">Sign Out</button>
            </div>
        </div>
    );
};

export default Header;
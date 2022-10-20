import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log("Context : ", user)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => console.error('Error : ', error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>daisyUI</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome {user.email}</span>}
                {
                    user?.email ?
                        <button onClick={handleSignOut} className="btn btn-sm">Log Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm">Log In</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Header;
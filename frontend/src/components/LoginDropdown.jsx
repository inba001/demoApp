import React, { useState, useEffect } from 'react';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import Modal from './Modal';

const LoginDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSignInOpen, setSignInOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);

    const handleSignIn = () => {
        setSignInOpen(false);
        setDropdownOpen(false); // Close dropdown when modal opens
    };

    const handleLogin = () => {
        setLoginOpen(false);
        setDropdownOpen(false); // Close dropdown when modal opens
    };

    const handleOpenSignIn = () => {
        setSignInOpen(true);
        setDropdownOpen(false); // Close dropdown when opening Sign In modal
    };

    const handleOpenLogin = () => {
        setLoginOpen(true);
        setDropdownOpen(false); // Close dropdown when opening Login modal
    };

    // Handle click outside the dropdown to close it
    const handleClickOutside = (event) => {
        if (event.target.closest('.dropdown') === null) {
            setDropdownOpen(false);
        }
    };

    // Add event listener for clicks outside of dropdown
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdown when a modal is opened
    useEffect(() => {
        if (isSignInOpen || isLoginOpen) {
            setDropdownOpen(false);
        }
    }, [isSignInOpen, isLoginOpen]);

    return (
        <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="btn btn-primary dropdown-toggle" type="button" onClick={handleOpenLogin} aria-expanded={isDropdownOpen}>
                <i className="fa-regular fa-user" aria-hidden="true"></i> Login{' '}
                {/* Arrow Icon */}
                <i className={`fa ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
            </button>
            {isDropdownOpen && (
                <ul className="dropdown-menu show">
                    <li className="dropdown-item"  onClick={handleOpenSignIn}>
                        New customer? <a href="#signup">Signup</a>
                    </li>
                    {/* Uncomment these if you want to add User Profile and Orders links */}
                    <li className="dropdown-item"><a href="/account/profile">User Profile</a></li>
                    <li className="dropdown-item"><a href="/account/orders">Orders</a></li>
                </ul>
            )}
            <Modal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)}>
                <SignInForm onSubmit={handleSignIn} />
            </Modal>

            <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
                <LoginForm onSubmit={handleLogin} />
            </Modal>
        </div>
    );
};

export default LoginDropdown;

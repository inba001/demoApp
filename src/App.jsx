import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal.jsx';
import SignInForm from './components/SignInForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Header from './components/Header.jsx';

function App() {
  const [count, setCount] = useState(0);

  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleSignIn = (data) => {
    console.log('SignIn Data:', data);
    setSignInOpen(false);
  };

  const handleLogin = (data) => {
    console.log('Login Data:', data);
    setLoginOpen(false);
  };

  return (
    <>
      <div>
        <Header />
        <button onClick={() => setSignInOpen(true)}>Sign In</button>
        <button onClick={() => setLoginOpen(true)}>Login</button>

        <Modal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)}>
          <SignInForm onSubmit={handleSignIn} />
        </Modal>

        <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
          <LoginForm onSubmit={handleLogin} />
        </Modal>
      </div>
    </>
  );
}

export default App;

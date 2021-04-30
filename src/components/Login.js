import React from 'react';

const Login = ({ authenticate }) => {
  return (
    <div className="login">
      <h2>Se connecter pour créer vos recettes</h2>
      <button onClick={authenticate} className="facebook-button">
        Connexion avec Facebook
      </button>
    </div>
  );
};

export default Login;
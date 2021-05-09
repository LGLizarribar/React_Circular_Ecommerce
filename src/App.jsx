import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { checkSession } from './api/auth';
import { RegisterForm, LoginForm, Navbar, Home, Products, SecureRoute } from './components';
import './App.scss';

const App = () => {
  const [user, setUser] = useState(null);
  const [hasUser, setHasUser] = useState(null);

  useEffect(() => {
    if(user) {
      console.log('Confirmamos que tenemos usuario');
    } else {
      getUser();
    }
  }, [user]);

  const getUser = async () => {
    try {
      const user = await checkSession();
      if(!user.message) {
        setUser(user);
        setHasUser(true);
      } else {
        setHasUser(false);
      }
    } catch (error) {
      console.log('error', error);
      setHasUser(false);
    }
  }
  
  const saveUser = user => {
    setUser(user);
    setHasUser(true);
  };

  const deleteUser = () => {
    setUser(null);
    setHasUser(false);
  }

  return (
    <Router>
      <div className="app">
      <Navbar user={user} deleteUser={deleteUser} />
      <Switch>
        <Route exact path="/register" component={(props) => <RegisterForm saveUser={saveUser} {...props} />} />
        <Route exact path="/login" component={(props) => <LoginForm saveUser={saveUser} {...props} />} />
        <SecureRoute exact path="/products" hasUser={hasUser} component={Products} />
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
      </div>
    </Router>
  );
};

export default App;

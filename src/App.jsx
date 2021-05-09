import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { checkSession } from './api/auth';
import { RegisterForm, LoginForm, Navbar } from './components';
import './App.scss';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const user = await checkSession();
      if(!user.message) setUser(user);
    } catch (error) {
      console.log('error', error);
    }
  }
  
  const saveUser = user => {
    setUser(user);
  };

  return (
    <Router>
      <div className="app">
      <Navbar user={user} saveUser={saveUser} />
      <Switch>
        <Route exact path="/register" component={(props) => <RegisterForm saveUser={saveUser} {...props} />} />
        <Route exact path="/login" component={(props) => <LoginForm saveUser={saveUser} {...props} />} />
      </Switch>
      </div>
    </Router>
  );
};

export default App;

import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkSessionAsync } from './redux/slices/user.slice';
import { RegisterForm, LoginForm, Navbar, Home, Products, SecureRoute } from './components';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
      dispatch(checkSessionAsync());
  };

  return (
    <Router>
      <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/register" component={(props) => <RegisterForm {...props} />} />
        <Route exact path="/login" component={(props) => <LoginForm {...props} />} />
        <SecureRoute exact path="/products" component={Products} />
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
      </div>
    </Router>
  );
};

export default App;

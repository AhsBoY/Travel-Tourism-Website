import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderBooking from './Components/Bookings/OrderBooking/OrderBooking';
import MyBookings from './Components/Bookings/MyBookings/MyBookings';
import { Adb } from '@mui/icons-material';
import Admin from './Components/Admin/Admin';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orderbooking/:id">
            <OrderBooking />
          </PrivateRoute>
          <PrivateRoute path="/mybookings">
            <MyBookings />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { AuthActions } from '../store/auth-slice';

const Header = () => {
  const authState = useSelector(state => state.auth.isAuth);
  const dispatch  = useDispatch();

  const logOutHandler = (e) =>{
    e.preventDefault();
    dispatch(AuthActions.logout())
    console.log(authState)
    
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authState && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;

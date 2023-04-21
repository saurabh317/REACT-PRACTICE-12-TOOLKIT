import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../store/auth-slice';

const Auth = () => {
  const state  = useSelector(state => state.auth.isAuth);
  console.log(state)
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(AuthActions.login())
    
  
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

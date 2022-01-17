import React, {useRef} from "react";
import classes from './Header.module.css';
import { useSelector, useDispatch } from "react-redux";
import {userActions} from '../store/index';





const Header = props => {
    const dispatch = useDispatch();
    const usersInfoFull = useSelector(state => state.users); //be carefull 'users' is the NAME of slice)
    const currentTransfers = useSelector(state => state.users.currentTransfers);
    
    const currentTransfersSum = currentTransfers.reduce((accum, curValue) => {
        return accum + curValue;
    }, 0);
   
    
    
    
    
    
    const enteredNameRef = useRef();
    const enteredPasswordRef = useRef();

    
    
    
    const loginHandler = (event) => {
      event.preventDefault();
      const enteredName = enteredNameRef.current.value;
      const enteredPassword = enteredPasswordRef.current.value;

      const payloadData = {name: enteredName, password: enteredPassword };
      dispatch(userActions.login(payloadData));
      console.log(currentTransfers);
    
    }
 
    return (
        <React.Fragment>
       <div className={classes.header}>
           <div className={classes.left}>
               <h1>С возвращением, Дияз</h1>
           </div>
           <div className={classes.right}>
              <form onSubmit={loginHandler}>
                  <label htmlFor="name">Name</label>
                  <input id='name' ref={enteredNameRef}></input>
                  <label htmlFor="password">Password</label>
                  <input id="password" ref={enteredPasswordRef}></input>
                  <button>&rarr;</button>
              </form>
           </div>
       </div>
       <div className={classes.headerBottom}>
          <div className={classes.currentBalanceText}>
             <h1>Текущий баланс</h1>
             <p>На 13/01/2022</p>
          </div>
          <div className={classes.balanceNumber}>
              <span>{currentTransfersSum}</span>$
          </div>
       </div>
       </React.Fragment>
    );
}

export default Header;
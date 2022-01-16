import React from "react";
import classes from './Header.module.css';

const Header = props => {
    return (
        <React.Fragment>
       <div className={classes.header}>
           <div className={classes.left}>
               <h1>С возвращением, Дияз</h1>
           </div>
           <div className={classes.right}>
              <form>
                  <input></input>
                  <input></input>
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
              <span>3840</span>$
          </div>
       </div>
       </React.Fragment>
    );
}

export default Header;
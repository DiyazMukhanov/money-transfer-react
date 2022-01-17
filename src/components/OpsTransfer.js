import React, {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {userActions} from '../store/index';



const OpsTransfer = props => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users.usersData);

    const enteredToRef = useRef();
    const enteredAmountRef = useRef();


  const moneyTransferHandler = (event) => {
      event.preventDefault();
      const enteredTo = enteredToRef.current.value;
      const enteredAmount = -enteredAmountRef.current.value;
      const payloadData = {to: enteredTo, amount: enteredAmount };
      dispatch(userActions.transfer(payloadData));
      console.log(usersData);
  }


  return (<form onSubmit={moneyTransferHandler}>
   <h3>Перевести деньги</h3>
   <input id="to" ref={enteredToRef}></input>
   <label htmlFor="to">Кому</label>
   <input id="amount" ref={enteredAmountRef}></input>
   <label htmlFor="amount">Сумма</label>
   <button>Отправить</button>
  </form>);
};



export default OpsTransfer;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {userActions} from '../store/index';
import TransferItemList from "./TransferItemList";

const TransferItems = props => {
 const currentTransfers = useSelector(state => state.users.currentTransfers);
  // const currentTransfers = useSelector(state => state.users.usersData[currentUserIndex].transfers); 


  return <div>
    <h1>Test</h1>
      <ul>
       {currentTransfers.map(transfer => <TransferItemList transfer = {transfer}/>)}
      </ul>
      </div>
};


export default TransferItems;
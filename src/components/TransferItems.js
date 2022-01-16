import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {userActions} from '../store/index';

const TransferItems = props => {
  const useDispatch = useDispatch();
  const usersData = useSelector(state => state.usersData);

  return <div>
      <ul>
      {/* {currentUserTransfers.map((transfer, i) => <li><div></div><span>{i+1} {transfer<0 ? }</span><div>{transfer}</div></li>)} */}
      </ul>
      </div>
};


export default TransferItems;
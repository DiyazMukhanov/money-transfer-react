import { createStore } from "redux";
import { createSlice, configureStore, current } from "@reduxjs/toolkit";



const initialUsersDataState = {
    usersData: [
    {name: 'Diyaz Mukhanov',
     password: '1111',
     transfers: [100, -50, 20, 450]
  },
  {name: 'James Peterson',
     password: '2222',
     transfers: [200, -30, 240, 450]
     
  },
  {name: 'Paul Smith',
     password: '3333',
     transfers: [170, -20, 80, 320]
     
  },
  ],
  loggedInIndex: null,
  //state of users
  users: ['Diyaz Mukhanov', 'James Peterson', 'Paul Smith'],
  currentTransfers: []
};

 

   const usersSlice = createSlice({
       name: 'users',
       initialState: initialUsersDataState,
       reducers: {
           login(state, action){
             const enteringUserIndex = state.users.indexOf(action.payload.name);
              console.log(enteringUserIndex);
              if(action.payload.password === state.usersData[enteringUserIndex].password){
                  state.loggedInIndex = enteringUserIndex;
                  state.currentTransfers = state.usersData[enteringUserIndex].transfers;
                  
              } else {
                  console.log('password error');
              }
              console.log(current(state.currentTransfers));
              
            // if(state.usersData[currentUserIndex].password === action.payload.password){
            //     console.log('password ok');
            //    state.currentUserIndex = currentUserIndex;
            //  } 
            //  console.log(current(state.currentTransfers));
           },

           transfer(state, action){
               const currentUserIndex = state.loggedInIndex;
               const sentToUserIndex = state.users.indexOf(action.payload.to);
               console.log('sent to index ' + sentToUserIndex);
               state.usersData[currentUserIndex].transfers.unshift(action.payload.amount * -1);
               state.currentTransfers = state.usersData[currentUserIndex].transfers;
               state.usersData[sentToUserIndex].transfers.unshift(action.payload.amount);
           }
          
       }
   });


const store = configureStore({
    reducer: {users: usersSlice.reducer}
});

export const userActions = usersSlice.actions;

export default store;
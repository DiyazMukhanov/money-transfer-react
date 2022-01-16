import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";



const initialUsersDataState = {usersData: [
    {name: 'Diyaz Mukhanov',
     password: 1111,
     transfers: [100, -50, 20, 450],
     
  },
  {name: 'James Peterson',
     password: 2222,
     transfers: [200, -30, 240, 450],
     
  },
  {name: 'Paul Smith',
     password: 3333,
     transfers: [170, -20, 80, 320],
     
  },
  ],
  //state of users
   users: ['Diyaz Mukhanov', 'James Peterson', 'Paul Smith'],
   currentUser: 'Diyaz Mukhanov'
};

   const usersSlice = createSlice({
       name: 'users',
       initialState: initialUsersDataState,
       reducers: {
           login(state, action){
             const currentUserIndex = state.users.indexOf(action.payload.name);
             if(state.usersData[currentUserIndex].password === action.payload.password){
               state.currentUser = state.currentUser[currentUserIndex].name;
             }
           },
           transfer(state){

           },
           loan(state){

           }
       }
   });


const store = configureStore({
    reducer: {users: usersSlice.reducer}
});

export const userActions = usersSlice.actions;

export default store;
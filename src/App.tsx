import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { RootState } from './store/store';

function App() {
    const {count} = useAppSelector(state => state.userReducer);
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch()

    console.log(increment(5))

  return (
    <div className="App">
     app
    </div>
  );
}

export default App;

import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'NAME') {
    return {
      ...state,
      name: action.data
    };
  }
  if(action.type === 'EMAIL'){
    return {
      ...state,
      email: action.data
    };
  }
  if(action.type === 'MOBILENUMBER'){
    return {
      ...state,
      mobileNumber: action.data
    };
  }
  throw Error('Unknown action.');
}

export default function useReducerCounter() {
  const userDetails = {
    name: '',
    email: '',
    mobileNumber: ''
  }
  const [state, dispatch] = useReducer(reducer, userDetails);

  return (
    <>
        
      <input type='text' onChange={(e) => dispatch({type: 'NAME', data: e.target.value})} />
      
      <input type='text' onChange={(e) => dispatch({type: 'EMAIL', data: e.target.value})} />

      <input onChange={(e) => dispatch({type: 'MOBILENUMBER', data: e.target.value})} />
      <h3>NAME: {state.name}</h3>
      <h3>EMAIL: {state.email}</h3>
      <h3>MOBILE: {state.mobileNumber}</h3>
      
    </>
  );
}

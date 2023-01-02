import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRandomMessage } from '../redux/messagesReducer';

const Greeting = () => {
  const state = useSelector((state) => state)

  const { message } = state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomMessage());
  }, {})
  
  return (
    <>
      <p>Greetings {message}!</p>
    </>
  )
}

export default Greeting;

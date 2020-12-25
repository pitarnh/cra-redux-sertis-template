import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input } from 'cent-comp'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../store/slices/counterSlice.js';

import CounterStyled from './styled'

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
		<CounterStyled>
      <div className='row'>
        <Button
           type="flat"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <span className='value'>{count}</span>
        <Button
          type="flat"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <div className='row'>
        <Input
          customStyle={{
            fontSize: '32px',
		        padding: '2px',
		        width: '30px',
		        textAlign: 'center',
		        marginRight: '8px'
          }}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button
          onClick={() =>dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </Button>
        <Button
          type="flat"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </Button>
      </div>
		</CounterStyled>
  )
}

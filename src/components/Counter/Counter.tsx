import React from 'react';

import s from './Counter.module.scss';

type CounterI = {
  count: number;
}

export const Counter: React.FC<CounterI> = ({ count }) => {
  return (
    <div className={s.Counter}>
      {count}
    </div>
  );
};
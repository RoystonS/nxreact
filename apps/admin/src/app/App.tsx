// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';

import { isEven } from '@shufflies/is-even';
import { isOdd } from '@shufflies/is-odd';

import { ChangeEvent, useState } from 'react';

export function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Main</h1>
      <div>
        The number{' '}
        <input
          className={styles.numberInput}
          type="number"
          onChange={handleChange}
          value={value}
        />{' '}
        is {isEven(value) ? 'even' : 'not even'}/
        {isOdd(value) ? 'odd' : 'not odd'}.
      </div>
    </div>
  );
}

export default App;

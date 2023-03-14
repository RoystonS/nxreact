// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';

import { Route, Routes, Link } from 'react-router-dom';

import { isEven } from '@shufflies/is-even';
import { isOdd } from '@shufflies/is-odd';

import { ChangeEvent, useState } from 'react';

export function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <>
      <h1 className={styles.main}>Main</h1>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>

      <div>
        <input type="number" onChange={handleChange} value={value} />
        is {isEven(value) ? 'even' : 'not even'}/
        {isOdd(value) ? 'odd' : 'not odd'}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;

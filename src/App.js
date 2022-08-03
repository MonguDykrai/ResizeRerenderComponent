import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import './style.css';

function Button() {
  console.log(2);
  return <button style={{ width: window.innerWidth * 0.4 }}>anniu</button>;
}

function useResize(autoResize = true, wait = 300) {
  const [visible, setVisible] = useState(autoResize);

  var handler = useCallback(() => {
    setVisible(false);
    _.debounce(function () {
      setVisible(true);
    }, wait)();
  }, [setVisible]);
  useEffect(() => {
    window.addEventListener('resize', handler);
    return window.addEventListener('resize', handler);
  }, []);
  return {
    visible,
  };
}

function ThrottleButton({ autoResize, wait }) {
  const { visible } = useResize(autoResize, wait);
  console.log({ visible });
  if (visible === false) return;
  return <Button></Button>;
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ThrottleButton autoResize wait={200} />
    </div>
  );
}

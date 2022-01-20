import { useState } from 'react';
import { Exemplo3 } from '../Exemplo3';

export const Exemplo2 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  return (
    <>
      <h1>Exemplo2</h1>
      <p>{count}</p>
      <button onClick={() => setCount((p) => p + 1)}>Count</button>
      <p>{text}</p>
      <Exemplo3 setText={setText} />
    </>
  );
};

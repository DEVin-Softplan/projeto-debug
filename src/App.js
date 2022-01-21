import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Exemplo } from './components/Exemplo';

function App() {
  const [props, setProps] = useState('Teste propDrilling');

  return (
    <div>
      <p>teste</p>
      <button onClick={() => setProps('Alterado')}>setProp</button>
      <Exemplo props={props} />
    </div>
  );
}

export default App;

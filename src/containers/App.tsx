import React from 'react';
import Main from '../pages/Main';
import Store  from '../context/Store';

function App() {
  return (
    <Store>
      <Main/>
    </Store>
  );
}

export default App;

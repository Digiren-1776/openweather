import React from 'react';
import Header from './Header';
import Wcard from './Wcard';
import '../index.css'


const App = () => {
  return (
    <div description='global container' className='bg-gradient-to-r from-cyan-700 to-slate-700 h-screen w-screen'>
        <Header />
      <div description='body container' className='h-2/3 flex flex-col w-4/5 mx-auto'>
        <Wcard />
      </div>
    </div>
  );
}

export default App;

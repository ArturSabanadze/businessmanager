import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button';
import LoginForm1 from './components/LoginForms/LoginForm1/LoginForm1';
import LoginForm2 from './components/LoginForms/LoginForm2/LoginForm2';

const handleClick = () => {
  alert('You clicked ');
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='button-container'><br />
    <Button id="btn-1" label="btn-1" onClick={() => handleClick()} />
    <Button id="btn-2" label="btn-2" onClick={() => handleClick()} />
    <Button id="btn-3" label="btn-3" onClick={() => handleClick()} />
    <Button id="btn-4" label="btn-4" onClick={() => handleClick()} />
    <Button id="btn-5" label="btn-5" onClick={() => handleClick()} />
    <Button id="btn-6" label="btn-6" onClick={() => handleClick()} />
    <Button id="btn-7" label="btn-7" onClick={() => handleClick()} />
    <Button id="btn-8" label="btn-8" onClick={() => handleClick()} />
    <Button id="btn-9" label="btn-9" onClick={() => handleClick()} />
    <Button id="btn-10" label="btn-10" onClick={() => handleClick()} /><br /><br />

    <Button id="btn-11" label="btn-11" onClick={() => handleClick()} />
    <Button id="btn-12" label="btn-12" onClick={() => handleClick()} />
    <Button id="btn-13" label="btn-13" onClick={() => handleClick()} />
    <Button id="btn-14" label="btn-14" onClick={() => handleClick()} />
    <Button id="btn-15" label="btn-15" onClick={() => handleClick()} />
    <Button id="btn-16" label="btn-16" onClick={() => handleClick()} />
    <Button id="btn-17" label="btn-17" onClick={() => handleClick()} />
    <Button id="btn-18" label="btn-18" onClick={() => handleClick()} />
    <Button id="btn-19" label="btn-19" onClick={() => handleClick()} />
    <Button id="btn-20" label="btn-20" onClick={() => handleClick()} />
    <Button id="btn-21" label="btn-21" onClick={() => handleClick()} />
    <Button id="btn-22" label="btn-22" onClick={() => handleClick()} />

    <Button id="btn-23" label="btn-23" onClick={() => handleClick()} />
    <Button id="btn-24" label="btn-24" onClick={() => handleClick()} />
    <Button id="btn-25" label="btn-25" onClick={() => handleClick()} />
    <Button id="btn-26" label="btn-26" onClick={() => handleClick()} />
    <Button id="btn-27" label="btn-27" onClick={() => handleClick()} />
    <Button id="btn-28" label="btn-28" onClick={() => handleClick()} />
    <Button id="btn-29" label="btn-29" onClick={() => handleClick()} />
    <Button id="btn-30" label="btn-30" onClick={() => handleClick()} />
    <Button id="btn-31" label="btn-31" onClick={() => handleClick()} />
    <Button id="btn-32" label="btn-32" onClick={() => handleClick()} />
    </div>

    <div className='login-form-container'>
      <LoginForm1 onSubmit={() => handleClick()}> </LoginForm1>
      <LoginForm2 onSubmit={() => handleClick()}> </LoginForm2>
    </div>
  </React.StrictMode>
);

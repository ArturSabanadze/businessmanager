import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button';

const handleClick = () => {
  alert('You clicked ');
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button id="btn-1" label="Button 1" onClick={() => handleClick()} />
    <Button id="btn-2" label="Button 2" onClick={() => handleClick()} />
    <Button id="btn-3" label="Button 3" onClick={() => handleClick()} />
    <Button id="btn-4" label="Button 4" onClick={() => handleClick()} />
    <Button id="btn-5" label="Button 5" onClick={() => handleClick()} />
    <Button id="btn-6" label="Button 6" onClick={() => handleClick()} />
    <Button id="btn-7" label="Button 7" onClick={() => handleClick()} />
    <Button id="btn-8" label="Button 8" onClick={() => handleClick()} />
    <Button id="btn-9" label="Button 9" onClick={() => handleClick()} />
    <Button id="btn-10" label="Reservation 10" onClick={() => handleClick()} />
  </React.StrictMode>
);

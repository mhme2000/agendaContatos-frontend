import React from 'react';
import './App.css';
import { Table, Button, TableHead, TableBody } from '@mui/material';
import Listagem from './components/Listagem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Agenda de Contatos
        </p>
        <Button variant="contained"> Vamos começar?</Button>
        <Listagem />
      </header>
     
    </div>
  );
}

export default App;

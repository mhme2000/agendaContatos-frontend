import React from 'react';
import Button from '@mui/material/Button'
import Link from 'next/link';

const Home = () => (
    <div className="App">
        <header className="App-header">
        <h3>
        Agenda de Contatos
        </h3>
        <Link href="listagem" passHref>
        <Button variant="contained"> Vamos começar?</Button>
        </Link>
        </header>
    </div>
   
)

export default Home;

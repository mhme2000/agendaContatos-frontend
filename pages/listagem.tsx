import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Icon } from '@mui/material';
import api from '../api/api';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'nomeContato', headerName: 'First name', width: 180 },
  { field: 'numeroContato', headerName: 'Last name', width: 180 },
  { field: 'options', headerName: 'Options', width: 180, sortable: false, disableColumnMenu:true },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
//   { id: 6, lastName: 'Melisandre', firstName: null },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
// ];

const Home = () => {
  const [contatos, setContatos] = useState([]);

  const getData = async () => {
    const {data} = await api.get("/AgendaContato");
    setContatos(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return ( 
    <div className="App">
      <header className="App-header">
        <p>
          Agenda de Contatos
        </p>
        <Grid item xl={4}>
          <Button >Adicionar Contato<Icon>add_circle </Icon></Button>
        </Grid>
        <br></br>
        <Grid item xs={4} >
          <Button>Remover Contato<DeleteIcon /></Button>
        </Grid>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid style={{ height: 375, width: '50%', justifyContent:'center' }}
            rows={contatos}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>
      </header>
    </div>
  );
}

export interface Contato {
  id : number,
  nomeContato : string,
  numeroContato: string
} 

export default Home;



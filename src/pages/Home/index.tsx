import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Icon } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },

  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Agenda de Contatos
        </p>
        <Button variant="contained"> Vamos começar?</Button>
        <br></br>
        <Grid item xs={4}>
        <Button >Adicionar Contato<Icon>add_circle </Icon></Button>
        </Grid>
        <br></br>
        <Grid item xs={4}>
        <Button>Remover Contato<DeleteIcon/></Button>
      </Grid>
        <br></br>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid style={{height: 365, width:'95%'}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
      </header>
    </div>
  );
}

export default Home;

import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import api from '../api/api';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Home = () => {
  const [contatos, setContatos] = useState([]);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'nomeContato', headerName: 'First name', width: 180 },
    {
      field: 'options',
      headerName: '',
      renderCell: (params) => (
        <span>  
          <IconButton  style={{paddingRight: 5}} ><EditOutlinedIcon /></IconButton >
          <IconButton  onClick={() => removeContact(params.id)}> <DeleteOutlineOutlinedIcon /></IconButton >  
        </span>
      ),
      disableColumnMenu: true,
      sortable: false
    },
  ];
  async function removeContact(id : any) {
    await api.delete(`/AgendaContato?agendaContatoId=${id}`);
    getData();
  }
  
  async function getData(){
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
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid style={{ height: 375, width: '26%', justifyContent:'center' }}
            rows={contatos}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[10]}          
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



import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import api from "../api/api";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/router";

const Listagem = () => {
  const router = useRouter();
  const [contatos, setContatos] = useState([]);
  const [dados, setDados] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "nomeContato", headerName: "First name", width: 180 },
    {
      field: "options",
      headerName: "",
      width: 150,
      renderCell: (params) => (
        <span>
          <IconButton
            onClick={() => {
              router.push(`visualizar/${params.id}`);
            }}
            style={{ paddingRight: 5 }}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              router.push(`editar/${params.id}`);
            }}
            style={{ paddingRight: 5 }}
          >
            <EditOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleClickOpen(params);
            }}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </span>
      ),
      disableColumnMenu: true,
      sortable: false,
    },
  ];
  const handleClickOpen = (params: any) => {
    setOpen(true);
    setDados(params.id);
  };
  const handleClose = (params: any) => {
    setOpen(false);
  };
  async function removeContact() {
    setOpen(false);
    await api.delete(`/AgendaContato?agendaContatoId=${dados}`).then(() => {
      setDados(0);
      getData();
    });
  }

  async function getData() {
    setLoading(true);
    await api.get("/AgendaContato").then((result) => {
      setContatos(result.data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Excluir contato"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja realmente excluir esse contato?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={removeContact} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      <div className="App">
        <header className="App-header">
          <p>Agenda de Contatos</p>
          <Link href="adicionar" passHref>
            <Button style={{ width: 340 }} variant="contained">
              <AddIcon style={{ paddingRight: 5 }} /> Adicionar contato
            </Button>
          </Link>

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              style={{ height: 375, width: 385, justifyContent: "center" }}
              rows={contatos}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[10]}
              isRowSelectable={() => false}
              loading={loading}
            />
          </div>
        </header>
      </div>
    </>
  );
};

export interface Contato {
  id: number;
  nomeContato: string;
  numeroContato: string;
}

export default Listagem;

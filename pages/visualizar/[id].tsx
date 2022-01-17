import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import Router from "next/router";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useRouter } from "next/router";
import api from "../../api/api";
const initialFormContact = {
  nomeContato: "",
  numeroContato: "",
  enderecoContato: "",
};

const Detalhes = () => {
  useEffect(() => {
    const { id } = router.query;
    getDataById(id);
  }, []);
  const [dados, setDados] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function getDataById(id) {
    setLoading(true);
    await api.get(`/AgendaContato/GetId/${id}`).then((result) => {
      setDados(result.data);
      setLoading(false);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Detalhes do contato</h3>
        <Box
          style={{ display: "flex", flexDirection: "column" }}
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="nomeContato"
            name="nomeContato"
            label={!loading ? dados.nomeContato : "carregando..."}
            variant="filled"
            disabled
          />
          <TextField
            id="numeroContato"
            name="numeroContato"
            label={!loading ? dados.numeroContato : "carregando..."}
            variant="filled"
            disabled
          />
          <TextField
            id="enderecoContato"
            name="enderecoContato"
            label={!loading ? dados.enderecoContato : "carregando..."}
            variant="filled"
            disabled
          />
          <Grid container style={{ justifyContent: "center" }}>
            <Button
              style={{
                width: 175,
                backgroundColor: "red",
                textAlign: "center",
              }}
              variant="contained"
              onClick={() => Router.push("/listagem")}
            >
              <ArrowBackIcon style={{ paddingRight: 5 }} /> Voltar
            </Button>
            <Button
              onClick={() => {
                router.push(`/editar/${dados.agendaContatoId}`);
              }}
              style={{
                width: 175,
                backgroundColor: "blue",
                textAlign: "center",
              }}
              variant="contained"
            >
              <EditOutlinedIcon style={{ paddingRight: 5 }} /> Editar
            </Button>
          </Grid>
        </Box>
      </header>
    </div>
  );
};

export default Detalhes;

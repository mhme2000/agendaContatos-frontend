import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import Router, { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import api from "../../api/api";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid } from "@mui/material";

const initialFormContact = {
  agendaContatoId: 0,
  nomeContato: "",
  numeroContato: "",
  enderecoContato: "",
};

const Add = () => {
  useEffect(() => {
    const { id } = router.query;
    getDataById(id);
  }, []);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState(initialFormContact);
  const setInput = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }));
  };

  async function getDataById(id) {
    setLoading(true);
    await api.get(`/AgendaContato/GetId/${id}`).then((result) => {
      setForm(result.data);
      setLoading(false);
    });
  }
  async function onSave(data) {
    await api.put("/AgendaContato", data).then(() => {
      Router.push("/listagem");
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Editar Contato</h3>
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
            label="Nome do contato"
            variant="filled"
            onChange={(e) => setInput({ nomeContato: e.target.value })}
            value={form.nomeContato}
            required
          />
          <TextField
            id="numeroContato"
            name="numeroContato"
            label="Telefone"
            variant="filled"
            onChange={(e) => setInput({ numeroContato: e.target.value })}
            value={form.numeroContato}
            required
          />
          <TextField
            id="enderecoContato"
            name="enderecoContato"
            label="Endereço"
            variant="filled"
            onChange={(e) => setInput({ enderecoContato: e.target.value })}
            value={form.enderecoContato}
            required
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
              onClick={() => onSave(form)}
              style={{
                width: 175,
                backgroundColor: "green",
                textAlign: "center",
              }}
              variant="contained"
            >
              <SaveIcon style={{ paddingRight: 5 }} /> Salvar
            </Button>
          </Grid>
        </Box>
      </header>
    </div>
  );
};

export default Add;

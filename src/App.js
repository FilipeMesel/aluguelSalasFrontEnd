import './estilosdoprojeto.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import Alerta from './components/Alerta';
import TituloPagina from './components/TituloPagina';

function App() {
  const [reunioes, setReunioes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("here")
      try {
        const response = await fetch("https://service-aluguel-salas.onrender.com/reuniao");
        if (response.ok) {
          const data = await response.json();
          console.log("JSON recebido:", data);
          setReunioes(data);
        } else {
          console.error("Erro na resposta da solicitação GET");
        }
      } catch (error) {
        console.error("Erro ao buscar as reuniões:", error);
      }
      console.log("here3")
    }
    fetchData();
  }, []);
  console.log(reunioes)

  //TODO FUNÇÃO APAGAR
  function deletar(id)
  {
    console.log("deletar id", id)
    // Defina a URL da API
    const apiUrl = "https://service-aluguel-salas.onrender.com/reuniao";

    // ID da reunião que você deseja excluir
    const reuniaoId = id;

    // Configuração do Axios para fazer a solicitação DELETE
    axios
      .delete(`${apiUrl}/${reuniaoId}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Reunião excluída com sucesso.");
          // alert('Reunião cancelada com sucesso!')
          Alerta("negativo", "Reunião EXCLUIDA com sucesso!")
          window.location.reload();
        } else {
          console.error("Erro na resposta da solicitação DELETE");
        }
      })
      .catch((error) => {
        console.error("Erro ao excluir a reunião:", error);
      });

  }

  return (
    <>
    <TituloPagina texto={"Aluguel de salas de reunião"}/>
    <div className="container">

    <Formulario />

    <Tabela reunioes = {reunioes}/>

    </div>
    </>
  );
}

export default App;

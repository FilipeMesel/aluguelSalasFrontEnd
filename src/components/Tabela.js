import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';

function Tabela(reunioes) {
console.log("reunioes: ",reunioes.reunioes)

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
          alert('Reunião cancelada com sucesso!')
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
    <Table striped bordered hover size="sm" variant="outline-success">
      <thead>
        <tr>
            <th>Nome</th>
            <th>Loja</th>
            <th>Grau</th>
            <th>Sala</th>
            <th>Data Inicial</th>
            <th>Data Final</th>
        </tr>
      </thead>
      <tbody>
        {reunioes.reunioes.map((reuniao) => (
        <tr key={reuniao.id}>
            <td>{reuniao.nome}</td>
            <td>{reuniao.loja}</td>
            <td>{reuniao.grau}</td>
            <td>{reuniao.sala}</td>
            <td>{reuniao.dataInicial}</td>
            <td>{reuniao.dataFinal}</td>
            {/* <td>
                <Button  onClick={()=> deletar(reuniao.id)} variant="warning" type="submit">
                    Cancelar
                </Button>
            </td> */}
        </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tabela;
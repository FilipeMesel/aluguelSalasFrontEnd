import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Formulario() {
    const [formData, setFormData] = useState({
      nome: "",
      grau: "MM",
      loja: "",
      sala: 1,
      dataInicial: "2023-10-09T11:41:58",
      dataFinal: "2023-10-10T19:41:58",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "https://service-aluguel-salas.onrender.com/reuniao";
    console.log("Add ", formData)
    axios
        .post(apiUrl, formData)
        .then((response) => {
        if (response.status === 200) {
            console.log("Reunião adicionada com sucesso.");
            // Limpar o formulário
            setFormData({
            nome: "",
            grau: "MM",
            loja: "",
            sala: 1,
            dataInicial: "2023-10-09T11:41:58",
            dataFinal: "2023-10-10T19:41:58",
            });
            alert('Sala alugada com sucesso!')
            window.location.reload();
        } else {
            console.error("Erro na resposta da solicitação POST");
            alert('Erro ao add reunião')
        }
        })
        .catch((error) => {
        console.error("Erro ao adicionar a reunião:", error);
        alert('Sala já foi alugada nesta data e horário')
        });
    }

  return (
    <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control 
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Digite seu nome" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Grau</Form.Label>
        <Form.Control 
            type="text"
            id="grau"
            name="grau"
            value={formData.grau}
            onChange={handleChange}
            placeholder="Digite seu grau" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Loja</Form.Label>
        <Form.Control 
            type="text"
            id="loja"
            name="loja"
            value={formData.loja}
            onChange={handleChange}
            required
            placeholder="Digite seu loja" />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sala</Form.Label>
            <Form.Select id="sala" name="sala" value={formData.sala} onChange={handleChange}>
                <option value={1}>Sala 1</option>
                <option value={2}>Sala 2</option>
                <option value={3}>Sala 3</option>
                <option value={4}>Sala 4</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Data inicial</Form.Label>
            <Form.Control 
                type="datetime-local"
                id="dataInicial"
                name="dataInicial"
                value={formData.dataInicial}
                onChange={handleChange}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Data final</Form.Label>
            <Form.Control 
                type="datetime-local"
                id="dataFinal"
                name="dataFinal"
                value={formData.dataFinal}
                onChange={handleChange}
                required
            />
        </Form.Group>

        <Button variant="success" type="submit">
            Enviar
        </Button>
    </Form>
  );
}

export default Formulario;
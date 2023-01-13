import React from 'react';
import { Link } from 'react-router-dom'

class ClientList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        clients: []
      };
    }

    delClient(id) {
      console.log(id);
      fetch('http://127.0.0.1:8000/api/client/'+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      )
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/clients")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              clients: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, clients } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Carregando...</div>;
      } else {
        return (

          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {clients.map(client => (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.name}</td>
                        <td>{client.cpf}</td>
                        <td>{client.telephone}</td>
                        <td><button><Link to={{pathname:"/client/edit/"+client.id}}>Editar</Link></button></td>
                        <td><button onClick={() => this.delClient(client.id)}>Excluir</button></td>
                    </tr>
                ))}
            </tbody>
          </table>

        );
      }
    }
  }

export default ClientList;
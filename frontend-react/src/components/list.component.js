import React from 'react';

class ClientList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        clients: []
      };
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
            
          /*<ul>
            {clients.map(client => (
              <li key={client.id}>
                Nome: {client.name} | CPF: {client.cpf} | Telefone: {client.telephone}
              </li>
            ))}
          </ul>*/

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
                    </tr>
                ))}
            </tbody>
          </table>

        );
      }
    }
  }

  export default ClientList;
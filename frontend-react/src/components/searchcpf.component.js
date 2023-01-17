import React from 'react';
import { useNavigate } from 'react-router-dom'

class CreateClient extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name:'', cpf:'', telephone:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name] : event.target.value});
    }
  
    handleSubmit(event) {
      const {name, cpf, telephone} = this.state
        fetch("http://127.0.0.1:8000/api/client", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                cpf: cpf,
                telephone: telephone
            })
        }
        )
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                });
                console.log(result);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        
        event.preventDefault();
        this.props.navigate('/');
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>

            <label>
                CPF: &nbsp;
                <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange}/>
            </label><br/>

            <input type="submit" value="Buscar cliente por CPF" />

        </form>
      );
    }
  }

  function WithNavigate(props) {
    let navigate = useNavigate();
    return <CreateClient {...props} navigate={navigate} />
  }

export default WithNavigate; 
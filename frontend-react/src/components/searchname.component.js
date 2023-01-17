import React from 'react';
import { useNavigate } from 'react-router-dom'

class CreateClient extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name] : event.target.value});
    }
  
    handleSubmit(event) {
      const {name} = this.state
        fetch('http://127.0.0.1:8000/api/client/searchName/'+name, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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
                Buscar nome: &nbsp;
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </label><br/><br/>

            <input type="submit" value="Buscar" /><br/>

        </form>
      );
    }
  }

  function WithNavigate(props) {
    let navigate = useNavigate();
    return <CreateClient {...props} navigate={navigate} />
  }

export default WithNavigate; 
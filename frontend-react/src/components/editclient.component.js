import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditClient = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [client, setClient] = useState([]);

    useEffect(
        () => {
            getClient();
        }, []
    );

    const getClient =()=>{
        fetch('http://127.0.0.1:8000/api/client/'+id).then(res => res.json()).then(data=> {
            setClient(data);
        })
    }

    const handleChange = (event) => {
        setClient({...client, [event.target.name] : event.target.value});
    }

    const handleSubmit = (event) => {
        console.log(client);
        fetch('http://127.0.0.1:8000/api/client/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: client.name,
                cpf: client.cpf,
                telephone: client.telephone
            })
        }
        )
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                setClient({
                    isLoaded: true,
                    error
                });
            }
        )

        event.preventDefault();
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:&nbsp; 
                <input type="text" name="name" value={client.name} onChange={handleChange} />
            </label><br/>
            <label>
                CPF:&nbsp; 
                <input type="text" name="cpf" value={client.cpf} onChange={handleChange} />
            </label><br/>
            <label>
                Telefone:&nbsp; 
                <input type="text" name="telephone" value={client.telephone} onChange={handleChange} />
            </label><br/><br/>

            <input type="submit" value="Salvar" />
        </form>
    )
}

export default EditClient;
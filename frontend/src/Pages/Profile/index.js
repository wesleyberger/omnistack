import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Profile() {
    const [incidente, setIncident] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncident(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidente/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncident(incidente.filter(incidente => incidente.id !== id));
        }catch (err) {
        alert('Erro ao deletar caso, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to="/incidente/new">
                   Cadastrar novo caso 
                </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidente.map(incidente => (
                <li key={incidente.id}>
                    <strong>CASO:</strong>
                    <p>{incidente.title}</p>
                
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incidente.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incidente.value)}</p> 

                    <button onClick={() => handleDeleteIncident(incidente.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))} 
            </ul>
        </div>
    ); 
}
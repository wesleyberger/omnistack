/** importanto React */
import React, { useState } from 'react';
/** importando css */
import './styles.css';

/** importando icones react através do Father Icons */
import { FiLogIn } from 'react-icons/fi';

/** importanto link */
import { Link, useHistory } from 'react-router-dom';

/** importando api*/
import api from '../../services/api';

/** importando imagens */
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

            console.log(response.data.name);
        } catch (err){
            alert('Falha no login, tente novamente.');
        
        }   
    }

    return (
        <div className="logon-container">
            <section className="forms">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1 className="texto-logon">Faça Seu Logon</h1>

                    <input 
                    placeholder="Sua ID" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </ Link>
                </form>
            </section>
            
            <img src={heroesImg} alt="heroes" />

        </div>
        
    );
}
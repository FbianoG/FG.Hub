import { useEffect, useState } from 'react';
import ToastAlert from '../../components/Common/ToastAlert'
import './Home.css'

import { useForm } from "react-hook-form";
import { Login } from '../../api/getApi';

export default function Home({ func }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showAlert, setShowAlert] = useState(false)

    useEffect(()=> {localStorage.clear()}, [])
    const login = async (dataForm) => {
        try {
            const response = await Login(dataForm)
            localStorage.setItem('Token', response.token)
            location.href = '/planos'
        } catch (error) {
            console.log(error)
            setShowAlert({ text: error.message, type: 'error' })
        } finally {
            setTimeout(() => { setShowAlert(false) }, 6000);
        }
    }

    return (
        <div className="home">
            <div className="home__content">
                <h1>FG.Torrent</h1>
                <h2>Simplificando o processo hospitalar</h2>
                <p>Nosso compromisso é simplificar a admissão hospitalar. Centralizamos informações críticas, automatizando guias e aprimorando a eficiência operacional para tornar sua experiência mais conveniente e eficaz.</p>
                <img src="/undraw_selected_box_09k4 (1).svg" alt='' />
                <span>Desenvolvido por: Fabiano Gonçalves</span>
            </div>
            <form onSubmit={handleSubmit(login)}>
                <h3>FG.Torrent</h3>
                <label htmlFor=''>Login</label>
                <input type='text' {...register('username')} />
                <label htmlFor=''>Senha</label>
                <input type='password' {...register('password')} />
                <button type='submit'>Acessar</button>
            </form>
            {showAlert && <ToastAlert text={showAlert.text} type={showAlert.type} />}
        </div>

    )
}
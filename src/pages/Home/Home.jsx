import { useEffect, useState } from 'react';
import ToastAlert from '../../components/Common/ToastAlert'
import './Home.css'

import { useForm } from "react-hook-form";
import { CreateUser, Login } from '../../api/getApi';

export default function Home({ func }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [create, setCreate] = useState(false)

    const [loginLoading, setLoginLoading] = useState(false)

    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => { localStorage.clear() }, [])

    const login = async (dataForm) => {
        setLoginLoading(true)
        try {
            const response = await Login(dataForm)
            localStorage.setItem('Token', response.token)
            localStorage.setItem('Name', response.name)
            localStorage.setItem('Cnpj', response.cnpj)
            localStorage.setItem('Cnes', response.cnes)
            reset()
            location.href = '/planos'
        } catch (error) {
            console.log(error)
            setShowAlert({ type: 'error', title: 'Erro', text: error.message, })
        } finally {
            setTimeout(() => { setShowAlert(false) }, 6000);
            setLoginLoading(false)
        }
    }

    const createUser = async (dataForm) => {
        setLoginLoading(true)
        try {
            if (!dataForm.username || dataForm.username.trim() === '' || !dataForm.password || dataForm.password.trim() === '' || !dataForm.keyPass) throw new Error('Preencha todos os campos!')
            if (dataForm.password !== dataForm.password2) throw new Error('As senhas estão diferentes.')
            const response = await CreateUser(dataForm)
            setCreate(false)
            reset()
            setShowAlert({ type: 'success', title: 'Sucesso', text: error.message, })
        } catch (error) {
            console.log(error)
            setShowAlert({ type: 'error', title: 'Erro', text: error.message, })
        } finally {
            setTimeout(() => { setShowAlert(false) }, 6000);
            setLoginLoading(false)
        }
    }

    return (
        <div className="home">
            <div className="home__content">
                <h1>FG.Hub</h1>
                <h2>Simplificando o processo hospitalar</h2>
                <p>Nosso compromisso é simplificar a admissão hospitalar. Centralizamos informações críticas, automatizando guias e aprimorando a eficiência operacional para tornar sua experiência mais conveniente e eficaz.</p>
                <img src="/undraw_selected_box_09k4 (1).svg" alt='' />
                <span>Desenvolvido por: Fabiano Gonçalves</span>
            </div>
            {!create && <form onSubmit={handleSubmit(login)}>
                <h3>Login</h3>
                <label htmlFor=''>Login</label>
                <input type='text' {...register('username')} defaultValue={'admin'} />
                <label htmlFor=''>Senha</label>
                <input type='password' {...register('password')} defaultValue={'admin'} />
                {loginLoading ? <button type='submit' disabled >Aguarde...</button> : <button type='submit'>Acessar</button>}
                <span onClick={() => { setCreate(true), reset() }}>Criar conta</span>
            </form>}

            {create && <form onSubmit={handleSubmit(createUser)}>
                <h3>Criar Conta</h3>
                <label htmlFor=''>Login</label>
                <input type='text' {...register('username')} required />
                <label htmlFor=''>Senha</label>
                <input type='password' {...register('password')} required />
                <label htmlFor='' style={{ left: '-80px' }}>Repitir Senha</label>
                <input type='password' {...register('password2')} required />
                <label htmlFor=''>KeyPass</label>
                <input type='password' {...register('keyPass')} required />
                {loginLoading ? <button type='submit' disabled >Aguarde...</button> : <button type='submit'>Criar conta</button>}
                <span onClick={() => { setCreate(false), reset() }}>Cancelar</span>
            </form>}

            {showAlert && <ToastAlert data={showAlert} />}
        </div>

    )
}
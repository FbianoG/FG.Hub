import { CreatePlan, CreateRamal, CreateSite, CreateTerm, DeleteIten, UpdatePlan, UpdateRamal, UpdateSite, UpdateTerm } from '../../api/getApi';
import './ModalEdit.css'

// Firebase
import storage from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function ModalEdit({ data, type, func }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)


    const uploadTermFirebase = async (file, name) => {
        try {
            const auth = getAuth()
            const user = await signInWithEmailAndPassword(auth, import.meta.env.VITE_REACT_APP_FIREBASE_EMAIL, import.meta.env.VITE_REACT_APP_FIREBASE_PASSWORD,)
            const storageRef = ref(storage, `pdf/${name}`)
            const snapshot = await uploadBytes(storageRef, file)
            const downloadURL = await getDownloadURL(snapshot.ref)
            return downloadURL
        } catch (error) {
            console.error(error)
            throw new Error('Arquivo não carregado corretamente.')
        }
    }

    // Planos
    async function createPlan(dataForm) {
        setLoading(true)
        try {
            const response = await CreatePlan(dataForm)
            func.setShowAlert({ type: 'success', text: 'Plano criado!' })
            func.setModalEdit(false)
            func.getData('plans')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000);
            setLoading(false)
        }
    }

    async function updatePlan(dataForm) {
        dataForm._id = data._id
        setLoading(true)
        try {
            const response = await UpdatePlan(dataForm)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            func.getData('plans')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000);
            setLoading(false)
        }
    }

    // Termos
    async function createTerm(dataForm) {
        const file = dataForm.file[0]
        const name = dataForm.name
        setLoading(true)
        try {
            if (!dataForm.name || !dataForm.category) throw new Error('Preencha todos os campos.')
            if (!file) throw new Error('É necessário um arquivo PDF.')
            if (file.type !== 'application/pdf') throw new Error('Somente arquivos PDF são permitidos.')
            if (file.size > 4 * 1024 * 1024) throw new Error('Máximo de 4mb por arquivo.')
            const uploadFirebase = await uploadTermFirebase(file, name)
            const urlImg = uploadFirebase.split('token=').slice(0, 1).join('')
            const urlToken = uploadFirebase.split('token=').slice(1).join('')
            dataForm.src = urlImg
            dataForm.srcToken = urlToken
            const response = await CreateTerm(dataForm)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            func.getData('terms')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000)
            setLoading(false)
        }
    }

    async function updateTerm(dataForm) {
        dataForm._id = data._id
        const file = dataForm.file[0]
        const name = dataForm.name
        setLoading(true)
        try {
            if (!dataForm.name || !dataForm.category) throw new Error('Preencha todos os campos.')
            if (file) {
                if (file.type !== 'application/pdf') throw new Error('Somente arquivos PDF são permitidos.')
                if (file.size > 4 * 1024 * 1024) throw new Error('Máximo de 4mb por arquivo.')
                const uploadFirebase = await uploadTermFirebase(file, name)
                const urlImg = uploadFirebase.split('token=').slice(0, 1).join('')
                const urlToken = uploadFirebase.split('token=').slice(1).join('')
                dataForm.src = urlImg
                dataForm.srcToken = urlToken
            }
            const response = await UpdateTerm(dataForm)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            func.getData('terms')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000)
            setLoading(false)
        }
    }


    // Ramais
    async function createRamal(dataForm) {
        setLoading(true)
        try {
            const response = await CreateRamal(dataForm)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            func.getData('ramais')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000)
            setLoading(false)
        }
    }

    async function updateRamal(dataForm) {
        dataForm._id = data._id
        setLoading(true)
        try {
            const response = await UpdateRamal(dataForm)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            func.getData('ramais')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000)
            setLoading(false)
        }
    }


    // Sites
    async function createSite(dataForm) {
        setLoading(true)
        try {
            const response = await CreateSite(dataForm)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            func.getData('sites')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000)
            setLoading(false)
        }
    }

    async function updateSite(dataForm) {
        dataForm._id = data._id
        setLoading(true)
        try {
            const response = await UpdateSite(dataForm)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            func.getData('sites')
        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000)
            setLoading(false)
        }
    }

    // Deletar
    async function delIten(exType) {
        if (!window.confirm('Você tem certeza que deseja excluir este item?')) return
        setLoading(true)
        try {
            const response = await DeleteIten(exType, data._id)
            func.setShowAlert({ type: 'success', title: 'Sucesso', text: response.message })
            func.setModalEdit(false)
            if (exType === 'plan') func.getData('plans')
            else if (exType === 'term') func.getData('terms')
            else if (exType === 'ramal') func.getData('ramais')
            else if (exType === 'site') func.getData('sites')

        } catch (error) {
            console.error(error)
            func.setShowAlert({ type: 'error', title: 'Error', text: error.message })
        } finally {
            setTimeout(() => { func.setShowAlert(false) }, 5000)
            setLoading(false)
        }
    }

    return (
        <div className="modalEdit">

            {/* Planos */}
            {type === 'createPlan' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(createPlan)}>
                    <h3 className='modalEdit__content-title'>Criar Plano</h3>
                    <label htmlFor=''>Plano:</label>
                    <input type='text' {...register('name')} />
                    <label htmlFor=''>Login:</label>
                    <input type='text' {...register('login')} />
                    <label htmlFor=''>Senha:</label>
                    <input type='text' {...register('password')} />
                    <label htmlFor=''>Site:</label>
                    <input type='text' {...register('web')} />
                    <label htmlFor=''>Cód. Prestador:</label>
                    <input type='text' {...register('data.cod')} />
                    <label htmlFor=''>Telefone:</label>
                    <input type='text' {...register('data.tel')} />
                    <label htmlFor=''>E-mail:</label>
                    <input type='text' {...register('data.email')} />
                    <label htmlFor=''>Autorização:</label>
                    <input type='text'{...register('data.aut')} />
                    <label htmlFor=''>Requer Guia:</label>
                    <input type='text' {...register('data.guia')} />
                    <label htmlFor=''>Requer Senha:</label>
                    <input type='text' {...register('data.senha')} />
                    <label htmlFor=''>Observação:</label>
                    <textarea {...register('data.obs')} ></textarea>
                    <div className="modelEdit__content-groupBtn">
                        <button style={{ display: 'none' }}></button>
                        <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                        <button type='submit'>Criar</button>
                    </div>
                </form>
            }
            {type === 'editPlan' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(updatePlan)}>
                    <h3 className='modalEdit__content-title'>Editar Plano</h3>
                    <label htmlFor=''>Plano:</label>
                    <input type='text' defaultValue={data.name} {...register('name')} />
                    <label htmlFor=''>Login:</label>
                    <input type='text' defaultValue={data.login}  {...register('login')} />
                    <label htmlFor=''>Senha:</label>
                    <input type='text' defaultValue={data.password} {...register('password')} />
                    <label htmlFor=''>Site:</label>
                    <input type='text' defaultValue={data.web} {...register('web')} />
                    <label htmlFor=''>Cód. Prestador:</label>
                    <input type='text' defaultValue={data.data.cod}  {...register('data.cod')} />
                    <label htmlFor=''>Telefone:</label>
                    <input type='text' defaultValue={data.data.tel}  {...register('data.tel')} />
                    <label htmlFor=''>E-mail:</label>
                    <input type='text' defaultValue={data.data.email}  {...register('data.email')} />
                    <label htmlFor=''>Autorização:</label>
                    <input type='text' defaultValue={data.data.att}  {...register('data.att')} />
                    <label htmlFor=''>Requer Guia:</label>
                    <input type='text' defaultValue={data.data.guia}  {...register('data.guia')} />
                    <label htmlFor=''>Requer Senha:</label>
                    <input type='text' defaultValue={data.data.senha}  {...register('data.senha')} />
                    <label htmlFor=''>Observação:</label>
                    <textarea defaultValue={data.data.obs}  {...register('data.obs')}></textarea>
                    <div className="modelEdit__content-groupBtn">
                        {loading && <>
                            <button disabled></button>
                            <button disabled></button>
                            <button disabled>Aguarde...</button>

                        </>}
                        {!loading && <>
                            <button type='button' onClick={() => delIten('plan')}>Excluir</button>
                            <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                            <button type='submit'>Atualizar</button>
                        </>}
                    </div>
                </form>
            }

            {/* Termos */}
            {type === 'createTerm' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(createTerm)}>
                    <h3 className='modalEdit__content-title'>Criar Documento</h3>
                    <label htmlFor=''>Nome:</label>
                    <input type='text' {...register('name')} />
                    <label htmlFor=''>Categoria:</label>
                    <select {...register('category')}>
                        <option value="emergência">Emergência</option>
                        <option value="internação">Internação</option>
                        <option value="policial">Policial</option>
                        <option value="outros">Outros</option>
                    </select>
                    <label htmlFor=''>Arquivo:</label>
                    <input type='file' {...register('file')} />
                    <div className="modelEdit__content-groupBtn">
                        <button style={{ display: 'none' }}></button>
                        <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                        <button type='submit'>Criar</button>
                    </div>
                </form>
            }
            {type === 'editTerm' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(updateTerm)}>
                    <h3 className='modalEdit__content-title'>Editar Documento</h3>
                    <label htmlFor=''>Nome:</label>
                    <input type='text' defaultValue={data.name} {...register('name')} />
                    <label htmlFor=''>Categoria:</label>
                    <select defaultValue={data.category} {...register('category')}>
                        <option value="emergência">Emergência</option>
                        <option value="internação">Internação</option>
                        <option value="policial">Policial</option>
                        <option value="outros">Outros</option>
                    </select>
                    <label htmlFor=''>Arquivo:</label>
                    <input type='file' {...register('file')} />

                    <div className="modelEdit__content-groupBtn">
                        {loading && <>
                            <button disabled></button>
                            <button disabled></button>
                            <button disabled>Aguarde...</button>

                        </>}
                        {!loading && <>
                            <button type='button' onClick={() => delIten('term')}>Excluir</button>
                            <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                            <button type='submit'>Atualizar</button>
                        </>}
                    </div>
                </form>
            }

            {/* Ramais */}
            {type === 'createRamal' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(createRamal)}>
                    <h3 className='modalEdit__content-title'>Criar Ramal</h3>
                    <label htmlFor=''>Setor:</label>
                    <input type='text'  {...register('setor')} />
                    <label htmlFor=''>Ramal:</label>
                    <input type='text'   {...register('ramal')} />
                    <div className="modelEdit__content-groupBtn">
                        <button style={{ display: 'none' }}></button>
                        <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                        <button type='submit'>Criar</button>
                    </div>
                </form>
            }
            {type === 'editRamal' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(updateRamal)}>
                    <h3 className='modalEdit__content-title'>Editar Ramal</h3>
                    <label htmlFor=''>Setor:</label>
                    <input type='text' defaultValue={data.setor} {...register('setor')} />
                    <label htmlFor=''>Ramal:</label>
                    <input type='text' defaultValue={data.ramal}  {...register('ramal')} />

                    <div className="modelEdit__content-groupBtn">
                        {loading && <>
                            <button disabled></button>
                            <button disabled></button>
                            <button disabled>Aguarde...</button>

                        </>}
                        {!loading && <>
                            <button type='button' onClick={() => delIten('ramal')}>Excluir</button>
                            <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                            <button type='submit'>Atualizar</button>
                        </>}
                    </div>
                </form>
            }

            {/* Sites */}
            {type === 'createSite' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(createSite)}>
                    <h3 className='modalEdit__content-title'>Criar Site</h3>
                    <label htmlFor=''>Nome:</label>
                    <input type='text' {...register('name')} />
                    <label htmlFor=''>Site:</label>
                    <input type='text'  {...register('web')} />
                    <label htmlFor=''>Link Imagem:</label>
                    <input type='text'  {...register('src')} />
                    <div className="modelEdit__content-groupBtn">
                        <button style={{ display: 'none' }}>Excluir</button>
                        <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                        <button type='submit'>Criar</button>
                    </div>
                </form>
            }
            {type === 'editSite' &&
                <form className="modalEdit__content" onSubmit={handleSubmit(updateSite)}>
                    <h3 className='modalEdit__content-title'>Editar Site</h3>
                    <label htmlFor=''>Nome:</label>
                    <input type='text' defaultValue={data.name} {...register('name')} />
                    <label htmlFor=''>Site:</label>
                    <input type='text' defaultValue={data.web}  {...register('web')} />
                    <label htmlFor=''>Link Imagem:</label>
                    <input type='text' defaultValue={data.src} {...register('src')} />
                    <div className="modelEdit__content-groupBtn">
                        {loading && <>
                            <button disabled></button>
                            <button disabled></button>
                            <button disabled>Aguarde...</button>

                        </>}
                        {!loading && <>
                            <button type='button' onClick={() => delIten('site')}>Excluir</button>
                            <button type='button' onClick={() => func.setModalEdit(false)}>Cancelar</button>
                            <button type='submit'>Atualizar</button>
                        </>}
                    </div>
                </form>
            }
        </div>
    )
}
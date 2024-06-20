import { useState } from 'react'
import './Config.css'

import { GetPlans, GetRamais, GetSites, GetTerms, GetDoctors } from '../../api/getApi'
import ModalEdit from '../../components/Common/ModalEdit'
import ToastAlert from '../../components/Common/ToastAlert'
import Header from '../../components/Shared/Header'
import Loading from '../../components/Common/Loading'

export default function Config() {

    const [modalEdit, setModalEdit] = useState(false)
    const [typeModal, setTypeModal] = useState('')
    const [element, setElement] = useState(null)

    const [showAlert, setShowAlert] = useState(false)
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState(null) // Conteudo que irá carregar (planos, termos, etc.)
    const [typeData, setTypeData] = useState(null) // Tipo de conteudo que irá carregar (planos, termos, etc.)


    async function getData(e) {
        setTypeData(e)
        setData(null)
        setLoading(true)
        let response
        try {
            if (e === 'plans') { response = await GetPlans(); setData(response) }
            else if (e === 'terms') { response = await GetTerms(); setData(response) }
            else if (e === 'ramais') { response = await GetRamais(); setData(response) }
            else if (e === 'sites') { response = await GetSites(); setData(response) }
            else if (e === 'doctors') { response = await GetDoctors(); setData(response) }
        } catch (error) {
            console.log(error)
            setShowAlert({ type: 'error', title: 'Erro', text: error.message, })
        } finally {
            setLoading(false)
            setTimeout(() => setShowAlert(false), 7000)
        }
    }


    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Configurações</h1>
                <div className="filterGroup">
                    <button onClick={() => getData('plans')}>Planos <i className="fa-solid fa-sliders"></i></button>
                    <button onClick={() => getData('terms')}>Termos <i className="fa-solid fa-sliders"></i></button>
                    <button onClick={() => getData('ramais')}>Ramais  <i className="fa-solid fa-sliders"></i></button>
                    <button onClick={() => getData('sites')}>Sites <i className="fa-solid fa-sliders"></i></button>
                    <button onClick={() => getData('doctors')}>Médicos <i className="fa-solid fa-sliders"></i></button>
                </div>
                {typeData === 'plans' &&
                    <>
                        <div className="group__legends">
                            <span>Plano</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span>Login</span>
                            <span>Senha</span>
                            <button title='Adicionar Plano' onClick={() => { setTypeModal('createPlan'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {data && data.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.name}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.login}</span>
                                    <span>{element.password}</span>
                                    <button title='Editar Plano' onClick={() => { setTypeModal('editPlan'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                        {data?.length === 0 && <h3 style={{ margin: '0 auto', color: '#444' }}>Não há dados cadastrados no banco de dados!</h3>}
                    </>
                }
                {typeData === 'terms' &&
                    <>
                        <div className="group__legends">
                            <span>Nome</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span style={{ gridColumn: 'span 2' }}>Arquivo</span>
                            <button title='Adicionar Arquivo' onClick={() => { setTypeModal('createTerm'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {data && data.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.name}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <a href={`${element.src}token=${element.srcToken}`} target='_blank' style={{ gridColumn: 'span 2' }}>PDF - {element.name}</a>
                                    <button title='Editar Arquivo' onClick={() => { setTypeModal('editTerm'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                        {data?.length === 0 && <h3 style={{ margin: '0 auto', color: '#444' }}>Não há dados cadastrados no banco de dados!</h3>}
                    </>
                }
                {typeData === 'ramais' &&
                    <>
                        <div className="group__legends">
                            <span>Setor</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span style={{ gridColumn: 'span 2' }}>Ramal</span>
                            <button title='Adicionar Ramal' onClick={() => { setTypeModal('createRamal'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {data && data.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.setor}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span style={{ gridColumn: 'span 2' }}>{element.ramal}</span>
                                    <button title='Editar Ramal' onClick={() => { setTypeModal('editRamal'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                        {data?.length === 0 && <h3 style={{ margin: '0 auto', color: '#444' }}>Não há dados cadastrados no banco de dados!</h3>}
                    </>
                }
                {typeData === 'sites' &&
                    <>
                        <div className="group__legends">
                            <span>Nome</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span style={{ gridColumn: 'span 2' }}>WebSite</span>
                            <button title='Adicionar Site' onClick={() => { setTypeModal('createSite'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {data && data.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.name}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <a href={element.web} target='_blank' style={{ gridColumn: 'span 2' }}>{element.web}</a>
                                    <button title='Editar Site' onClick={() => { setTypeModal('editSite'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                        {data?.length === 0 && <h3 style={{ margin: '0 auto', color: '#444' }}>Não há dados cadastrados no banco de dados!</h3>}
                    </>
                }
                {typeData === 'doctors' &&
                    <>
                        <div className="group__legends">
                            <span>Nome</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span >Conselho de Medicina</span>
                            <span >CBO</span>
                            <button title='Adicionar Médico' onClick={() => { setTypeModal('createDoctor'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {data && data.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.name}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.crm}</span>
                                    <span>{element.cbo}</span>
                                    <button title='Editar Médico' onClick={() => { setTypeModal('editDoctor'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                        {data?.length === 0 && <h3 style={{ margin: '0 auto', color: '#444' }}>Não há dados cadastrados no banco de dados!</h3>}
                    </>
                }
            </div>

            {loading && <Loading />}
            {modalEdit && <ModalEdit func={{ setModalEdit, setShowAlert, getData }} data={element} type={typeModal} />}
            {showAlert && <ToastAlert data={showAlert} />}
        </>
    )
}
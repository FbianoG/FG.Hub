import { useState } from 'react'
import './Config.css'

import { GetPlans, GetRamais, GetSites, GetTerms } from '../../api/getApi'
import ModalEdit from '../../components/Common/ModalEdit'
import ToastAlert from '../../components/Common/ToastAlert'
import Header from '../../components/Shared/Header'

export default function Config() {

    const [plans, setPlans] = useState(null)
    const [terms, setTerms] = useState(null)
    const [ramais, setRamais] = useState(null)
    const [sites, setSites] = useState(null)

    const [modalEdit, setModalEdit] = useState(false)
    const [typeModal, setTypeModal] = useState('')
    const [element, setElement] = useState(null)

    const [showAlert, setShowAlert] = useState(false)

    function resetSets() {
        setPlans(null)
        setTerms(null)
        setRamais(null)
        setSites(null)
    }

    async function loadPlans() {
        resetSets()
        try {
            const response = await GetPlans()
            setPlans(response)
        } catch (error) {
            console.log(error)
            setShowAlert({ text: error.message, type: 'error' })
        }
        setTimeout(() => setShowAlert(false), 6000)
    }

    async function loadTerms() {
        resetSets()
        try {
            const response = await GetTerms()
            setTerms(response)
        } catch (error) {
            console.log(error)
            setShowAlert({ text: error.message, type: 'error' })
        }
        setTimeout(() => setShowAlert(false), 6000)
    }

    const loadRamais = async () => {
        resetSets()
        try {
            const response = await GetRamais()
            setRamais(response)
        } catch (error) {
            console.log(error)
            setShowAlert({ text: error.message, type: 'error' })
        }
        setTimeout(() => setShowAlert(false), 6000)
    }

    async function loadSites() {
        resetSets()
        try {
            const response = await GetSites()
            setSites(response)
        } catch (error) {
            console.log(error)
            setShowAlert({ text: error.message, type: 'error' })
        }
        setTimeout(() => setShowAlert(false), 6000)
    }




    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Configurações</h1>
                <div className="filterGroup">
                    <button onClick={loadPlans}>Planos <i className="fa-solid fa-sliders"></i></button>
                    <button onClick={loadTerms}>Termos <i className="fa-solid fa-sliders"></i></button>
                    <button onClick={loadRamais}>Ramais  <i className="fa-solid fa-sliders"></i></button>
                    <button onClick={loadSites}>Sites <i className="fa-solid fa-sliders"></i></button>
                </div>
                {plans &&
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
                            {plans && plans.map(element => (
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
                    </>
                }
                {terms &&
                    <>
                        <div className="group__legends">
                            <span>Nome</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span style={{ gridColumn: 'span 2' }}>Arquivo</span>
                            <button title='Adicionar Arquivo' onClick={() => { setTypeModal('createTerm'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {terms && terms.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.name}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <a href={`${element.src}token=${element.srcToken}`} target='_blank' style={{ gridColumn: 'span 2' }}>PDF - {element.name}</a>
                                    <button title='Editar Arquivo' onClick={() => { setTypeModal('editTerm'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                    </>
                }
                {ramais &&
                    <>
                        <div className="group__legends">
                            <span>Setor</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span style={{ gridColumn: 'span 2' }}>Ramal</span>
                            <button title='Adicionar Ramal' onClick={() => { setTypeModal('createRamal'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {ramais && ramais.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.setor}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span style={{ gridColumn: 'span 2' }}>{element.ramal}</span>
                                    <button title='Editar Ramal' onClick={() => { setTypeModal('editRamal'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                    </>
                }
                {sites &&
                    <>
                        <div className="group__legends">
                            <span>Nome</span>
                            <span>Criado em</span>
                            <span>Atualizado</span>
                            <span style={{ gridColumn: 'span 2' }}>WebSite</span>
                            <button title='Adicionar Site' onClick={() => { setTypeModal('createSite'), setModalEdit(true) }}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <ul className='group__list'>
                            {sites && sites.map(element => (
                                <li key={element._id} className='group__iten'>
                                    <span>{element.name}</span>
                                    <span>{element.create.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <span>{element.update.slice(0, 10).split('-').reverse().join('/')}</span>
                                    <a href={element.web} target='_blank' style={{ gridColumn: 'span 2' }}>{element.web}</a>
                                    <button title='Editar Site' onClick={() => { setTypeModal('editSite'), setModalEdit(true), setElement(element) }} ><i className="fa-solid fa-up-right-from-square"></i></button>
                                </li>
                            ))}
                        </ul >
                    </>
                }
            </div>














            {modalEdit && <ModalEdit func={{ setModalEdit, setShowAlert, loadPlans, loadRamais, loadTerms, loadSites }} data={element} type={typeModal} />}
            {showAlert && <ToastAlert text={showAlert.text} type={showAlert.type} />}
        </>
    )
}
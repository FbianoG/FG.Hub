import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'
import './Guias.css'

import { GetDoctors } from '../../api/getApi.js'

import React from 'react';
import tuss from '../../api/tabela_22';
import Guia from "../Guia/Guia";
import Header from "../../components/Shared/Header";
import GuiaSadt from "../Guia/GuiaSadt";

export default function Guias() {

    // Variáveis //

    const { register, handleSubmit, setValue, reset } = useForm();

    const [typeGuia, setTypeGuia] = useState('sadt') // Tipo da guia que será gerada
    const [textTypeGuia, setTextTypeGuia] = useState('Guia de Sadt') // Legenda do btn para selecionar guia
    const [optionsGuia, setOptionsGuia] = useState(false) // Visualizar opções do btn do tipo de guia

    // campos do TUSS
    const [tussField1, setTussField1] = useState(false)
    const [tussField2, setTussField2] = useState(false)
    const [tussField3, setTussField3] = useState(false)
    const [tussField4, setTussField4] = useState(false)
    const [tussField5, setTussField5] = useState(false)

    const [guiaActive, setGuiaActive] = useState(false) // Diz se a guia está visível ou não
    const [dataGuia, setDataGuia] = useState({}) // Dados da guia
    const [doctors, setDoctors] = useState(null) // Lista de médicos vindo do banco de dados


    // Funções //

    useEffect(() => { setValue('dateSol', new Date().toISOString().split('T')[0]); getDoctors() }, [])

    function addTuss() { // Inclui campo de procedimentos
        if (!tussField1) setTussField1(true)
        if (tussField1) setTussField2(true)
        if (tussField2) setTussField3(true)
        if (tussField3) setTussField4(true)
        if (tussField4) setTussField5(true)
    }

    function removeTuss() { // Excluir campo de procendimentos
        if (tussField5) setTussField5(false), setValue(`tuss6`, ''), setValue(`proced6`, ''), setValue(`qtd6`, '')
        if (!tussField5) setTussField4(false), setValue(`tuss5`, ''), setValue(`proced5`, ''), setValue(`qtd5`, '')
        if (!tussField4) setTussField3(false), setValue(`tuss4`, ''), setValue(`proced4`, ''), setValue(`qtd4`, '')
        if (!tussField3) setTussField2(false), setValue(`tuss3`, ''), setValue(`proced3`, ''), setValue(`qtd3`, '')
        if (!tussField2) setTussField1(false), setValue(`tuss2`, ''), setValue(`proced2`, ''), setValue(`qtd2`, '')
    }

    async function searchTuss(e) { // Autocompleta nome do procedimento ao digitar código TUSS
        if (e.target.value.length === 8) {
            let proced = e.target.parentNode.querySelectorAll('input')[1]
            const proceTuss = tuss.find(element => element.codigo == e.target.value)
            proced.value = proceTuss.procedimento
            proced.focus()
            e.target.parentNode.querySelectorAll('input')[2].focus()
        }
    }

    async function createGuia(data) { // Gera a guia
        setDataGuia(data)
        setGuiaActive(true)
        window.scrollTo(0, 0) // Scrolla ao topo da tela
    }

    async function createGuiaSadt(data) { // Gera a guia
        // setDataGuia(data)
        // setGuiaActive(true)
        // window.scrollTo(0, 0) // Scrolla ao topo da tela
        localStorage.setItem('Sadt', JSON.stringify(data))
        window.open('/sadt', '_blank');
    }

    async function getDoctors() { // Busca os médicos no banco de dados
        try { //! preciso fazer tratamento de erro aqui
            const response = await GetDoctors()
            setDoctors(response)
        } catch (error) {
            console.log(error)
        }
    }

    function selectMed(e) { // Autocompleta os inputs ao selecionar médico
        const findDoctor = doctors.find(element => element._id == e)
        setValue('doctor', findDoctor.name);
        setValue('crm', findDoctor.crm);
        setValue('cbo', findDoctor.cbo);
    }

    const [procedOptions, setProcedOptions] = useState([])

    function searchProced(event) {
        let proced = event.target.parentNode.querySelectorAll('ul')[0]
        if (event.target.value.trim().length < 3) {
            proced.style.display = 'none'
            return
        }
        proced.style.display = 'block'
        const proceTuss = tuss.filter(proceds => proceds.procedimento.toLowerCase().includes(event.target.value.toLowerCase())).sort((a, b) => b.procedimento.localeCompare(a.procedimento))
        console.log(proceTuss)
        setProcedOptions(proceTuss)

    }

    function selectItem(event, item) {
        event.target.parentNode.parentNode.querySelectorAll('input')[0].value = item.codigo
        event.target.parentNode.parentNode.querySelectorAll('input')[0].focus()
        event.target.parentNode.parentNode.querySelectorAll('input')[1].value = item.procedimento
        event.target.parentNode.parentNode.querySelectorAll('input')[1].focus()
        event.target.parentNode.parentNode.querySelectorAll('input')[2].value = '1'
        event.target.parentNode.parentNode.querySelectorAll('input')[2].focus()
        event.target.parentNode.style.display = 'none'
    }

    function inputTuss(e) { // HTML do campo de procedimentos
        return <div className='formField__content-tuss'>
            <label htmlFor=''>Código TUSS:</label>
            <input type='text' id='' {...register(`tuss${e}`)} onChange={(e) => searchTuss(e)} />
            <label htmlFor=''>Nome do Procedimento:</label>
            <input type='text' {...register(`proced${e}`)} onChange={(e) => searchProced(e)} autoComplete="off" />
            <ul className="formField__content-tuss-list">
                {procedOptions.map(element => <li key={element.codigo} className="formField__content-tuss-item" onClick={(e) => selectItem(e, element)} >{element.codigo} - {element.procedimento}</li>
                )}

            </ul>
            <label htmlFor=''>Quantidade:</label>
            <input type='text' defaultValue='1' {...register(`qtd${e}`)} />
        </div>
    }

    return (
        <>
            <Header />
            <div className="content">
                <h1 className='title'>Gerar Guias</h1>
                <div className="guias__typeGuia" onMouseLeave={() => setOptionsGuia(false)} >
                    <span className="guias__typeGuia-title">{textTypeGuia}</span>
                    <i className="fa-solid fa-caret-down" onClick={() => setOptionsGuia(true)}></i>
                    {optionsGuia && <div className="typeGuia__options" >
                        <span className="typeGuia__options-iten" onClick={() => { setTextTypeGuia('Guia de Internação'), setTypeGuia('int'), setOptionsGuia(false) }}>Guia de Internação</span>
                        <span className="typeGuia__options-iten" onClick={() => { setTextTypeGuia('Guia Sadt'), setTypeGuia('sadt'), setOptionsGuia(false) }}>Guia Sadt</span>
                    </div>}
                </div>

                {typeGuia === 'int' &&
                    <form className="formContainer-guia" onSubmit={handleSubmit(createGuia)}>
                        <fieldset>
                            <h3 className="formField-title">Dados do Paciente</h3>
                            <label htmlFor=''>Nome do Paciente:</label>
                            <input type='text' {...register("name")} required />
                            <label htmlFor=''>Nº da Carteirinha:</label>
                            <input type='text' {...register("planNumber")} />
                            <label htmlFor=''>Plano de Saúde:</label>
                            <select {...register("plan")} required>
                                <option value="" selected>Plano</option>
                                <option value="amil">Amil</option>
                                <option value="assim">Assim</option>
                                <option value="bradesco">Bradesco</option>
                                <option value="caberj">Caberj</option>
                                <option value="camarj">Camarj</option>
                                <option value="camperj">Camperj</option>
                                <option value="cassi">Cassi</option>
                                <option value="eletros">Eletros Saúde</option>
                                <option value="fiosaude">Fio Saúde</option>
                                <option value="gama">Gama Saúde</option>
                                <option value="goldencross">Golden Cross</option>
                                <option value="intermedica">Intermédica</option>
                                <option value="ipalerj">Ipalerj</option>
                                <option value="mediservice">Mediservice</option>
                                <option value="omint">Omint</option>
                                <option value="petrobras">Petrobras</option>
                                <option value="realgrandeza">Real Grandeza</option>
                                <option value="caixa">Saúde Caixa</option>
                                <option value="unafisco">Unafisco</option>
                                <option value="unimed">Unimed</option>
                                <option value="vale">Vale</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Dados da Autorização</h3>
                            <label htmlFor=''>Nº da Guia:</label>
                            <input type='text' {...register("guia")} />
                            <label htmlFor=''>Nº da Senha:</label>
                            <input type='text' {...register("password")} />
                            <label htmlFor=''>Selecionar Médico:</label>
                            <select onChange={(e) => selectMed(e.target.value)} >
                                <option value="" ></option>
                                {doctors && doctors.map(element => <option key={element._id} value={element._id}>{element.name}</option>)}
                            </select>
                            <label htmlFor=''>Médico Solicitante:</label>
                            <input type='text' {...register("doctor")} />
                            <label htmlFor=''>CRM do Médico:</label>
                            <input type='text' {...register("crm")} />
                            <label htmlFor=''>CBO do Médico:</label>
                            <input type='text' {...register("cbo")} />
                            <label htmlFor=''>Data da Solicitação:</label>
                            <input type='date' {...register("dateSol")} required />
                            <label htmlFor=''>Data da Autorização:</label>
                            <input type='date' {...register("dateAut")} />
                            <label htmlFor=''>Local de Realização:</label>
                            <select {...register('contratado')} required>
                                <option value="" ></option>
                                <option value="chn" >Complexo Hospitalar de Niterói</option>
                                <option value="hi" >Hospital Icaraí</option>

                            </select>

                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Dados da Internação</h3>
                            <label htmlFor=''>Indicação Clínica:</label>
                            <textarea spellCheck='false' {...register("ind")} required></textarea>
                            <label htmlFor=''>CID:</label>
                            <input type='text' {...register('cid')} />
                            <label htmlFor=''>OPME:</label>
                            <select {...register('opme')}>
                                <option value="N" >Não</option>
                                <option value="S" >Sim</option>

                            </select>
                            <label htmlFor=''>Tipo de Internação:</label>
                            <select {...register("type")}>
                                <option value="1">Clínica</option>
                                <option value="2">Cirúrgica</option>
                                <option value="4">Pediátrica</option>
                                <option value="3">Ginecológica</option>
                            </select>
                            <label htmlFor=''>Caráter de Internação:</label>
                            <select {...register("carater")}>
                                <option value="1">Urgência</option>
                                <option value="2">Eletiva</option>
                            </select>
                            <label htmlFor=''>Acomodação:</label>
                            <select {...register("typeRoom")}>
                                <option value=""></option>
                                <option value="Apt">Quarto</option>
                                <option value="Enf">Enfermaria</option>
                                <option value="UTI">UTI</option>
                            </select>
                            <label htmlFor=''>Diárias:</label>
                            <select {...register("daily")}>
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Procedimentos</h3>
                            <div className="formField__content-tuss">
                                <label htmlFor=''>Código TUSS:</label>
                                <input type='text' {...register("tuss1")} onChange={(e) => searchTuss(e)} />
                                <label htmlFor=''>Nome do Procedimento:</label>
                                <input type='text' {...register("proced1")} onChange={(e) => searchProced(e)} autoComplete="off" />
                                <ul className="formField__content-tuss-list">
                                    {procedOptions.map(element => <li key={element.codigo} className="formField__content-tuss-item" onClick={(e) => selectItem(e, element)} >{element.codigo} - {element.procedimento}</li>
                                    )}

                                </ul>
                                <label htmlFor='' >Quantidade:</label>
                                <input type='text' {...register("qtd1")} />
                            </div>
                            <div className="formField__divider"></div>
                            {tussField1 && inputTuss(2)}
                            <div className="formField__divider"></div>
                            {tussField2 && inputTuss(3)}
                            <div className="formField__divider"></div>
                            {tussField3 && inputTuss(4)}
                            <div className="formField__divider"></div>
                            {tussField4 && inputTuss(5)}
                            <div className="formField__divider"></div>
                            {tussField5 && inputTuss(6)}
                            <label htmlFor=''>Adicionar Procedimento:</label>
                            <div className="formField__btnGroup">
                                <button onClick={addTuss} type='button'><i className="fa-solid fa-plus"></i></button>
                                <button onClick={removeTuss} type='button'><i className="fa-solid fa-delete-left"></i></button>
                            </div>
                        </fieldset>
                        {/* <button onClick={() => pageActive('guia')}>gerar</button> */}
                        <button type="submit" className="btn__guia"><i className="fa-solid fa-print"></i>Gerar Guia</button>
                        <button type="button" className="btn__guia" onClick={() => reset()}><i className="fa-solid fa-eraser"></i>Limpar</button>

                    </form>
                }

                {typeGuia === 'sadt' &&
                    <form className="formContainer-guia" onSubmit={handleSubmit(createGuiaSadt)}>
                        <fieldset>
                            <h3 className="formField-title">Dados do Paciente</h3>
                            <label htmlFor=''>Nome do Paciente:</label>
                            <input type='text' {...register("name")} required />
                            <label htmlFor=''>Nº da Carteirinha:</label>
                            <input type='text' {...register("planNumber")} />
                            <label htmlFor=''>Plano de Saúde:</label>
                            <select {...register("plan")} required >
                                <option value="" selected disabled>Plano</option>
                                <option value="amil">Amil</option>
                                <option value="assim">Assim</option>
                                <option value="bradesco">Bradesco</option>
                                <option value="caberj">Caberj</option>
                                <option value="camarj">Camarj</option>
                                <option value="camperj">Camperj</option>
                                <option value="cassi">Cassi</option>
                                <option value="eletros">Eletros Saúde</option>
                                <option value="fiosaude">Fio Saúde</option>
                                <option value="gama">Gama Saúde</option>
                                <option value="goldencross">Golden Cross</option>
                                <option value="intermedica">Intermédica</option>
                                <option value="ipalerj">Ipalerj</option>
                                <option value="mediservice">Mediservice</option>
                                <option value="omint">Omint</option>
                                <option value="petrobras">Petrobras</option>
                                <option value="realgrandeza">Real Grandeza</option>
                                <option value="caixa">Saúde Caixa</option>
                                <option value="unafisco">Unafisco</option>
                                <option value="unimed">Unimed</option>
                                <option value="vale">Vale</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Dados da Autorização</h3>
                            {/* <label htmlFor=''>Nº da Guia:</label>
                            <input type='text' {...register("guia")} /> */}
                            {/* <label htmlFor=''>Nº da Senha:</label>
                            <input type='text' {...register("password")} /> */}

                            <label htmlFor=''>Selecionar Médico:</label>
                            <select onChange={(e) => selectMed(e.target.value)} required>
                                <option value="" ></option>
                                {doctors && doctors.map(element => <option value={element._id}>{element.name}</option>)}
                            </select>

                            <label htmlFor=''>Médico Solicitante:</label>
                            <input type='text' {...register("doctor")} />
                            <label htmlFor=''>CRM do Médico:</label>
                            <input type='text' {...register("crm")} />
                            <label htmlFor=''>CBO do Médico:</label>
                            <input type='text' {...register("cbo")} />

                            <label htmlFor=''>Data da Solicitação:</label>
                            <input type='date' {...register("dateSol")} defaultValue={new Date().toISOString().split('T')[0]} required />
                            {/* <label htmlFor=''>Data da Autorização:</label>
                            <input type='date' {...register("dateAut")} /> */}
                            {/* <div className="formField__data">
                            </div> */}
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Dados da Solicitação</h3>
                            <label htmlFor=''>Indicação Clínica:</label>
                            <input type='text' {...register("ind")} required />
                            <label htmlFor=''>Caráter do Procedimento:</label>
                            <select {...register("carater")} required >
                                <option value="2">Eletiva</option>
                                <option value="1" >Urgência</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Procedimentos</h3>
                            <div className="formField__content-tuss">
                                <label htmlFor=''>Código TUSS:</label>
                                <input type='text' {...register("tuss1")} onChange={(e) => searchTuss(e)} />
                                <label htmlFor=''>Nome do Procedimento:</label>
                                <input type='text' {...register("proced1")} onChange={(e) => searchProced(e)} autoComplete="off" />
                                <ul className="formField__content-tuss-list">
                                    {procedOptions.map(element => <li key={element.codigo} className="formField__content-tuss-item" onClick={(e) => selectItem(e, element)} >{element.codigo} - {element.procedimento}</li>
                                    )}

                                </ul>
                                <label htmlFor='' >Quantidade:</label>
                                <input type='text' {...register("qtd1")} />
                            </div>
                            <div className="formField__divider"></div>
                            {tussField1 && inputTuss(2)}
                            <div className="formField__divider"></div>
                            {tussField2 && inputTuss(3)}
                            <div className="formField__divider"></div>
                            {tussField3 && inputTuss(4)}
                            <div className="formField__divider"></div>
                            {tussField4 && inputTuss(5)}

                            <label htmlFor=''>Adicionar Procedimento:</label>
                            <div className="formField__btnGroup">
                                <button onClick={addTuss} type='button'><i className="fa-solid fa-plus"></i></button>
                                <button onClick={removeTuss} type='button'><i className="fa-solid fa-delete-left"></i></button>
                            </div>
                        </fieldset>
                        {/* <button onClick={() => pageActive('guia')}>gerar</button> */}
                        <button type="submit" className="btn__guia"><i className="fa-solid fa-print"></i>Gerar Guia</button>
                        <button type="button" className="btn__guia" onClick={() => reset()}><i className="fa-solid fa-eraser"></i> Limpar</button>
                    </form>
                }

                {guiaActive && typeGuia === 'sadt' &&
                    <div className="papel__sadt">
                        <GuiaSadt data={dataGuia} func={{ setGuiaActive }} />
                    </div>
                }

                {guiaActive && typeGuia === 'int' &&
                    <div className="papel">
                        <Guia data={dataGuia} func={{ setGuiaActive }} />
                    </div>
                }
            </div >

        </>
    )
}
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'
import './Guias.css'

import { GetDoctors } from '../../api/getApi.js'

import React from 'react';
import tuss from '../../api/tabela_22';
import Guia from "../Guia/Guia";
import Header from "../../components/Shared/Header";
import GuiaSadt from "../Guia/GuiaSadt";

export default function Guias({ pageActive }) {

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const [typeGuia, setTypeGuia] = useState('int')
    const [textTypeGuia, setTextTypeGuia] = useState('Guia de Internação')

    const [tussField1, setTussField1] = useState(false)
    const [tussField2, setTussField2] = useState(false)
    const [tussField3, setTussField3] = useState(false)
    const [tussField4, setTussField4] = useState(false)
    const [tussField5, setTussField5] = useState(false)

    const [guiaActive, setGuiaActive] = useState(false)
    const [dataGuia, setDataGuia] = useState({})


    const addTuss = () => {
        if (!tussField1) setTussField1(true)
        if (tussField1) setTussField2(true)
        if (tussField2) setTussField3(true)
        if (tussField3) setTussField4(true)
        if (tussField4) setTussField5(true)
    }

    function removeTuss() {
        if (tussField5) setTussField5(false), setValue(`tuss6`, ''), setValue(`proced6`, ''), setValue(`qtd6`, '')
        if (!tussField5) setTussField4(false), setValue(`tuss5`, ''), setValue(`proced5`, ''), setValue(`qtd5`, '')
        if (!tussField4) setTussField3(false), setValue(`tuss4`, ''), setValue(`proced4`, ''), setValue(`qtd4`, '')
        if (!tussField3) setTussField2(false), setValue(`tuss3`, ''), setValue(`proced3`, ''), setValue(`qtd3`, '')
        if (!tussField2) setTussField1(false), setValue(`tuss2`, ''), setValue(`proced2`, ''), setValue(`qtd2`, '')
    }

    const inputTuss = (e) => (
        <div className='formField__content-tuss'>
            <label htmlFor=''>Código TUSS:</label>
            <input type='text' id='' {...register(`tuss${e}`)} onChange={(e) => searchTuss(e)} />
            <label htmlFor=''>Nome do Procedimento:</label>
            <input type='text' {...register(`proced${e}`)} />
            <label htmlFor=''>Quantidade:</label>
            <input type='text' defaultValue='1' {...register(`qtd${e}`)} />
        </div>
    )

    async function searchTuss(e) {
        if (e.target.value.length === 8) {
            let proced = e.target.parentNode.querySelectorAll('input')[1]
            const proceTuss = tuss.find(element => element.codigo == e.target.value)
            proced.value = proceTuss.procedimento
            proced.focus()
            e.target.parentNode.querySelectorAll('input')[2].focus()
        }
    }

    async function createGuia(data) {
        const response = await
            setDataGuia(data)
        setGuiaActive(true)
        window.scrollTo(0, 0)
    }

    const [optionsGuia, setOptionsGuia] = useState(false)

    const [doctors, setDoctors] = useState(null)

    async function getDoctors() {
        try {
            const response = await GetDoctors()
            setDoctors(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { setValue('dateSol', new Date().toISOString().split('T')[0]); getDoctors() }, [])

    const [, set] = useState()

    function selectMed(e) {
        const findDoctor = doctors.find(element => element._id == e)
        setValue('doctor', findDoctor.name);
        setValue('crm', findDoctor.crm);
        setValue('cbo', findDoctor.cbo);
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
                            <input type='text' {...register("name")} />
                            <label htmlFor=''>Nº da Carteirinha:</label>
                            <input type='text' {...register("planNumber")} />
                            <label htmlFor=''>Plano de Saúde:</label>
                            <select {...register("plan")}>
                                <option value="" selected disabled>Plano</option>
                                <option value="amil">Amil</option>
                                <option value="assim">Assim</option>
                                <option value="caberj">Caberj</option>
                                <option value="cassi">Cassi</option>
                                <option value="eletros">Eletros Saúde</option>
                                <option value="fiosaude">Fio Saúde</option>
                                <option value="gama">Gama Saúde</option>
                                <option value="goldencross">Golden Cross</option>
                                <option value="intermedica">Intermédica</option>
                                <option value="ipalerj">Ipalerj</option>
                                <option value="petrobras">Petrobras</option>
                                <option value="realgrandeza">Real Grandeza</option>
                                <option value="caixa">Saúde Caixa</option>
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
                            <select onChange={(e) => selectMed(e.target.value)}>
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
                            <input type='date' {...register("dateSol")} />
                            <label htmlFor=''>Data da Autorização:</label>
                            <input type='date' {...register("dateAut")} />
                            <div className="formField__data">
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Dados da Internação</h3>
                            <label htmlFor=''>Indicação Clínica:</label>
                            <textarea spellCheck='false' {...register("ind")}></textarea>
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
                                <input type='text' {...register("proced1")} />
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
                            <button onClick={addTuss} type='button'>Adicionar</button>
                            <button onClick={removeTuss} type='button'>Remover</button>
                        </fieldset>
                        {/* <button onClick={() => pageActive('guia')}>gerar</button> */}
                        <button type="submit" className="btn__guia"><i className="fa-solid fa-print"></i>Gerar Guia</button>
                        <button type="button" className="btn__guia" onClick={() => reset()}><i className="fa-solid fa-eraser"></i>Limpar</button>

                    </form>
                }

                {typeGuia === 'sadt' &&
                    <form className="formContainer-guia" onSubmit={handleSubmit(createGuia)}>
                        <fieldset>
                            <h3 className="formField-title">Dados do Paciente</h3>
                            <label htmlFor=''>Nome do Paciente:</label>
                            <input type='text' {...register("name")} />
                            <label htmlFor=''>Nº da Carteirinha:</label>
                            <input type='text' {...register("planNumber")} />
                            <label htmlFor=''>Plano de Saúde:</label>
                            <select {...register("plan")}>
                                <option value="" selected disabled>Plano</option>
                                <option value="amil">Amil</option>
                                <option value="assim">Assim</option>
                                <option value="caberj">Caberj</option>
                                <option value="cassi">Cassi</option>
                                <option value="eletros">Eletros Saúde</option>
                                <option value="fiosaude">Fio Saúde</option>
                                <option value="gama">Gama Saúde</option>
                                <option value="goldencross">Golden Cross</option>
                                <option value="intermedica">Intermédica</option>
                                <option value="ipalerj">Ipalerj</option>
                                <option value="petrobras">Petrobras</option>
                                <option value="realgrandeza">Real Grandeza</option>
                                <option value="caixa">Saúde Caixa</option>
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
                            <select onChange={(e) => selectMed(e.target.value)}>
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
                            <input type='date' {...register("dateSol")} defaultValue={new Date().toISOString().split('T')[0]} />
                            {/* <label htmlFor=''>Data da Autorização:</label>
                            <input type='date' {...register("dateAut")} /> */}
                            {/* <div className="formField__data">
                            </div> */}
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Dados da Solicitação</h3>
                            <label htmlFor=''>Indicação Clínica:</label>
                            <input type='text' {...register("ind")} />
                            <label htmlFor=''>Caráter do Procedimento:</label>
                            <select {...register("carater")} >
                                <option value="1" >Urgência</option>
                                <option value="2">Eletiva</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <h3 className="formField-title">Procedimentos</h3>
                            <div className="formField__content-tuss">
                                <label htmlFor=''>Código TUSS:</label>
                                <input type='text' {...register("tuss1")} onChange={(e) => searchTuss(e)} />
                                <label htmlFor=''>Nome do Procedimento:</label>
                                <input type='text' {...register("proced1")} />
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
                            <button onClick={addTuss} type='button'>Adicionar</button>
                            <button onClick={removeTuss} type='button'>Remover</button>
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
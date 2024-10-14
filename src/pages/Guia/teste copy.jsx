import React from 'react'
import './teste.css'

export default function Teste() {

    return (
        <div className="guiaSadt">
            <div className="guiaSadtContent">

                <div className="guiaHeader">
                    <div className="guiaLogo">
                        <img src='./plansLogo/unafisco.png' alt='' />
                    </div>
                    <div className="">
                        <h3>GUIA DE SERVIÇO PROFISSIONAL / SERVIÇO AUXILIAR DE</h3>
                        <h3>DIAGNÓSTICO E TERAPIA - SP/SADT</h3>
                    </div>
                    <div className="">
                        <label>2 - Nº Guia no Prestador</label>
                    </div>
                </div>
                <div className="guiaSadtContentTable">

                    <div className='line'>
                        <div className="box" style={{ width: '95px' }}>
                            <label>1 - Registro ANS</label>
                            <p>33293213</p>
                        </div>
                        <div className="box" style={{ width: '276px' }}>
                            <label>3 - Número da Guia Principal</label>
                            <p>48971277602138789423</p>
                        </div>

                    </div>


                    <div className='line'>
                        <div className="box" style={{ width: '129px' }}>
                            <label>4 - Data de Validade da Senha</label>
                            <p>10/12/2024</p>
                        </div>
                        <div className="box" style={{ width: '289px' }}>
                            <label>5 - Senha</label>
                            <p>10/12/2024</p>
                        </div>
                        <div className="box" style={{ width: '129px' }}>
                            <label>6 - Data de Validade da Senha</label>
                            <p>10/12/2024</p>
                        </div>
                        <div className="box" style={{ width: '281px' }}>
                            <label>7 - Número da Guia Atribuído pela Operadora</label>
                            <p>48971277602138789423</p>
                        </div>

                    </div>

                    <div className='block'>Dados do Beneficiário</div>

                    <div className='line'>

                        <div className="box" style={{ width: '281px' }}>
                            <label>8 - Número da Carteira</label>
                            <p>214124125214512411231</p>
                        </div>

                        <div className="box" style={{ width: '129px' }}>
                            <label>9 - Validade da Carteira</label>
                            <p>10/10/2024</p>
                        </div>
                        <div className="box" style={{ width: '340px' }}>
                            <label>10 - Nome</label>
                            <p>Fabiano Goçalves Machado</p>
                        </div>
                        <div className="box" style={{ width: '210px' }}>
                            <label>11 - Cartão Nacional de Saúde</label>
                            <p>5125128120938409</p>
                        </div>
                        <div className="box" style={{ width: '93px' }}>
                            <label>12 - Atendimento a RN</label>
                            <p style={{ textAlign: 'center' }}>S</p>
                        </div>

                    </div>

                    <div className='block'>Dados do Solicitate</div>

                    <div className='line'>

                        <div className="box" style={{ width: '200px' }}>
                            <label>13 - Código na Operadora</label>
                            <p>10/12/2024</p>
                        </div>
                        <div className="box" style={{ width: '865px' }}>
                            <label>14 - Nome do Contratado</label>
                            <p>10/12/2024</p>
                        </div>

                    </div>



                    <div className='line'>

                        <div className="box" style={{ width: '328px', height: '34px', gap: '6px' }}>
                            <label>15 - Nome do Profissional Solicitante</label>
                            <p>Fabiano Goçalves Machado</p>
                        </div>
                        <div className="box" style={{ width: '63px', height: '34px', gap: '0px' }}>
                            <label>16 - Conselho Profissional</label>
                            <p style={{ textAlign: 'center', marginTop: '-2px' }}>CRM</p>
                        </div>
                        <div className="box" style={{ width: '212px', height: '34px', gap: '6px' }}>
                            <label>17 - Número no Conselho</label>
                            <p>52658510</p>
                        </div>
                        <div className="box" style={{ width: '41px', height: '34px', gap: '6px' }}>
                            <label>18 - UF</label>
                            <p style={{ textAlign: 'center' }}>rj</p>
                        </div>
                        <div className="box" style={{ width: '94px', height: '34px', gap: '6px' }}>
                            <label>19 - Código CBO</label>
                            <p>225125</p>
                        </div>
                        <div className="box" style={{ width: '313px', height: '34px', gap: '6px' }}>
                            <label>20 - Assinatura do Profissional Solicitante</label>
                            <p></p>
                        </div>

                    </div>

                    <div className='block'>Dados da Solicitação / Procedimentos e Exames Solicitados</div>

                    <div className='line'>

                        <div className="box" style={{ width: '67px', height: '34px', gap: '6px' }}>
                            <label>21 - Carater do Atendimento</label>
                            <p style={{ textAlign: 'center', marginTop: '-7px' }}>U</p>
                        </div>
                        <div className="box" style={{ width: '129px', height: '34px', gap: '6px' }}>
                            <label>22 - Data da Solicitação</label>
                            <p >01/01/2024</p>
                        </div>
                        <div className="box" style={{ width: '864px', height: '34px', gap: '6px' }}>
                            <label>23 - Indicação Clínica</label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti ipsum, quia repellat, perspiciatis reiciendis deleniti culpa provident totam non voluptas ducimus quasi adipisci laboriosam pariatur dignissimos tempora consequuntur. Accusamus?</p>
                        </div>

                    </div>


                    <div className='line'>

                        <div className="box" style={{ width: '100%', height: 'auto' }}>
                            <div className="boxHeader">
                                <label style={{ width: '50px' }}>24 - Tabela</label>
                                <label style={{ width: '130px' }}>25 - Código do Procedimennto</label>
                                <label style={{ width: '735px' }}>26 - Descrição</label>
                                <label style={{ width: '65px' }}>27 - Qtde. Solic.</label>
                                <label style={{ width: '65px' }}>28 - Qtde. Aut.</label>

                            </div>

                            <div className="boxLine">
                                <p>1 -</p>
                                <p style={{ width: '31px' }}>22</p>
                                <p style={{ width: '130px' }}>10104020</p>
                                <p style={{ width: '735px' }}>Visita Hospitalar (paciente interado)</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                            </div>
                            <div className="boxLine">
                                <p>2 -</p>
                                <p style={{ width: '31px' }}>22</p>
                                <p style={{ width: '130px' }}>10104020</p>
                                <p style={{ width: '735px' }}>Visita Hospitalar (paciente interado)</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                            </div>
                            <div className="boxLine">
                                <p>3 -</p>
                                <p style={{ width: '31px' }}>22</p>
                                <p style={{ width: '130px' }}>10104020</p>
                                <p style={{ width: '735px' }}>Visita Hospitalar (paciente interado)</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                            </div>
                            <div className="boxLine">
                                <p>4 -</p>
                                <p style={{ width: '31px' }}>22</p>
                                <p style={{ width: '130px' }}>10104020</p>
                                <p style={{ width: '735px' }}>Visita Hospitalar (paciente interado)</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                            </div>
                            <div className="boxLine">
                                <p>5 -</p>
                                <p style={{ width: '31px' }}>22</p>
                                <p style={{ width: '130px' }}>10104020</p>
                                <p style={{ width: '735px' }}>Visita Hospitalar (paciente interado)</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '65px', textAlign: 'center' }}>01</p>
                            </div>




                        </div>

                    </div>

                    <div className='block'>Dados do Contratado Executante</div>

                    <div className='line'>

                        <div className="box" style={{ width: '200px' }}>
                            <label>29 - Código na Operadora</label>
                            <p>60884855001207</p>
                        </div>
                        <div className="box" style={{ width: '758px' }}>
                            <label>30 - Nome do Contratado</label>
                            <p>Complexo Hospitalar de Niteroi</p>
                        </div>
                        <div className="box" style={{ width: '103px' }}>
                            <label>31 - Código CNES</label>
                            <p>312412</p>
                        </div>

                    </div>


                    <div className='block'>Dados do Atendimento</div>



                    <div className='line'>

                        <div className="box" style={{ width: '99px' }}>
                            <label>32 - Tipo de Atendimento</label>
                            <p style={{ textAlign: 'center' }}>01</p>
                        </div>
                        <div className="box" style={{ width: '225px' }}>
                            <label>33 - Indicação de Acidente (acidente ou doença relacionada)</label>
                            <p style={{ textAlign: 'center' }}>N</p>
                        </div>
                        <div className="box" style={{ width: '86px' }}>
                            <label>34 - Tipo de Consulta</label>
                            <p style={{ textAlign: 'center' }}>U</p>
                        </div>
                        <div className="box" style={{ width: '170px' }}>
                            <label>35 - Motivo de Encerramento do Atendimento</label>
                            <p style={{ textAlign: 'center' }}>01</p>
                        </div>

                    </div>

                    <div className='block'>Dados de Execução / Procedimentos e Exames Realizados</div>

                    <div className="line">


                        <div className="box" style={{ width: '100%', height: 'auto' }}>
                            <div className="boxHeader">
                                <label style={{ width: '140px' }}>36 - Data</label>
                                <label style={{ width: '60px' }}>37 - Hora Inicial</label>
                                <label style={{ width: '60px' }}>38 - Hora Final</label>
                                <label style={{ width: '43px' }}>39 - Tabela</label>
                                <label style={{ width: '140px' }}>40 - Código do Procedimento</label>
                                <label style={{ width: '190px' }}>41 - Descrição</label>
                                <label style={{ width: '40px' }}>42 - Qtde. </label>
                                <label style={{ width: '30px' }}>43 - Via</label>
                                <label style={{ width: '40px' }}>44 - Tec</label>
                                <label style={{ width: '80px' }}>45 - Fator Red./Acresc;</label>
                                <label style={{ width: '100px' }}>46 - Valor Unitário</label>
                                <label style={{ width: '100px' }}>47 - Valor Total</label>

                            </div>

                            <div className="boxLine">
                                <p>1 -</p>
                                <p style={{ width: '120px' }}>22/02/2024</p>
                                <p style={{ width: '60px' }}>10:50</p>
                                <p style={{ width: '60px' }}>11:00</p>
                                <p style={{ width: '43px', }}>22</p>
                                <p style={{ width: '140px', }}>10104020</p>
                                <p style={{ width: '190px', }}>Visita Hospitalar (pacietne internado)</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '80px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                            </div>
                            <div className="boxLine">
                                <p>2 -</p>
                                <p style={{ width: '120px' }}>22/02/2024</p>
                                <p style={{ width: '60px' }}>10:50</p>
                                <p style={{ width: '60px' }}>11:00</p>
                                <p style={{ width: '43px', }}>22</p>
                                <p style={{ width: '140px', }}>10104020</p>
                                <p style={{ width: '190px', }}>Visita Hospitalar (pacietne internado)</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '80px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                            </div>
                            <div className="boxLine">
                                <p>3 -</p>
                                <p style={{ width: '120px' }}>22/02/2024</p>
                                <p style={{ width: '60px' }}>10:50</p>
                                <p style={{ width: '60px' }}>11:00</p>
                                <p style={{ width: '43px', }}>22</p>
                                <p style={{ width: '140px', }}>10104020</p>
                                <p style={{ width: '190px', }}>Visita Hospitalar (pacietne internado)</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '80px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                            </div>
                            <div className="boxLine">
                                <p>4 -</p>
                                <p style={{ width: '120px' }}>22/02/2024</p>
                                <p style={{ width: '60px' }}>10:50</p>
                                <p style={{ width: '60px' }}>11:00</p>
                                <p style={{ width: '43px', }}>22</p>
                                <p style={{ width: '140px', }}>10104020</p>
                                <p style={{ width: '190px', }}>Visita Hospitalar (pacietne internado)</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '80px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                            </div>
                            <div className="boxLine">
                                <p>5 -</p>
                                <p style={{ width: '120px' }}>22/02/2024</p>
                                <p style={{ width: '60px' }}>10:50</p>
                                <p style={{ width: '60px' }}>11:00</p>
                                <p style={{ width: '43px', }}>22</p>
                                <p style={{ width: '140px', }}>10104020</p>
                                <p style={{ width: '190px', }}>Visita Hospitalar (pacietne internado)</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '40px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '80px', textAlign: 'center' }}>01</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                                <p style={{ width: '100px', }}>R$150,00</p>
                            </div>



                        </div>
                    </div>


                    <div className='block'>Identificação do(s) Profissional(is) Executante(s)</div>

                    <div className="line" >
                        <div className="box" style={{ width: '100%', height: 'auto' }}>

                            <div className="boxHeader">
                                <label style={{ width: '40px' }}>48-Seq.Ref</label>
                                <label style={{ width: '45px' }}> 49-Grau Part</label>
                                <label style={{ width: '160px' }}>50 - Código na Operadora/CPF</label>
                                <label style={{ width: '420px' }}>51 - Nome do Profissional </label>
                                <label style={{ width: '50px' }}>52 - Conselho</label>
                                <label style={{ width: '190px' }}>53 - NNúmero no Conselho</label>
                                <label style={{ width: '30px' }}>54 - UF. </label>
                                <label style={{ width: '97px' }}>55 - Código CBO</label>
                            </div>

                            <div className="boxLine" >
                                <p style={{ width: '40px' }}>01</p>
                                <p style={{ width: '45px' }}>01</p>
                                <p style={{ width: '160px' }}>215215124</p>
                                <p style={{ width: '420px', }}>Fabiano Gonçalves Machado</p>
                                <p style={{ width: '50px', textAlign: 'center' }}>CRM</p>
                                <p style={{ width: '190px', }}>52658510</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>RJ</p>
                                <p style={{ width: '97px', }}>01</p>

                            </div>
                            <div className="boxLine" >
                                <p style={{ width: '40px' }}>01</p>
                                <p style={{ width: '45px' }}>01</p>
                                <p style={{ width: '160px' }}>215215124</p>
                                <p style={{ width: '420px', }}>Fabiano Gonçalves Machado</p>
                                <p style={{ width: '50px', textAlign: 'center' }}>CRM</p>
                                <p style={{ width: '190px', }}>52658510</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>RJ</p>
                                <p style={{ width: '97px', }}>01</p>

                            </div>
                            <div className="boxLine" >
                                <p style={{ width: '40px' }}>01</p>
                                <p style={{ width: '45px' }}>01</p>
                                <p style={{ width: '160px' }}>215215124</p>
                                <p style={{ width: '420px', }}>Fabiano Gonçalves Machado</p>
                                <p style={{ width: '50px', textAlign: 'center' }}>CRM</p>
                                <p style={{ width: '190px', }}>52658510</p>
                                <p style={{ width: '30px', textAlign: 'center' }}>RJ</p>
                                <p style={{ width: '97px', }}>01</p>

                            </div>

                        </div>
                    </div>


                    <div className="line" >
                        <div className="box" style={{ width: '100%', height: 'auto' }}>

                            <div className="boxHeader">
                                <label >56-Data de Realização de Procedimentos em Série</label>
                                <label >57-Assinatura do Beneficiário ou Responsável</label>

                            </div>

                            <div className="boxLine" >
                                <p style={{ width: '' }}>1 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>3 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>5 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>7 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>9 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                            </div>
                            <div className="boxLine" >
                                <p style={{ width: '' }}>2 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>4 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>6 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>8 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                                <p style={{ width: '' }}>10 - |__|__| |__|__| |__|__|__|__| ______________________</p>
                            </div>


                        </div>
                    </div>

                    <div className='line'>

                        <div className="box" style={{ width: '100%', height: '30px', backgroundColor: '#bbb' }}>
                            <label>58 - Observação / Justificativa</label>

                        </div>

                    </div>

                    <div className='line'>

                        <div className="box" style={{ width: '100%', }}>
                            <label>59 - Total de Procedimentos (R$)</label>
                            <p>R$1000,00</p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>60 - Total de Taxas e Aluguéis (R$)</label>
                            <p>R$1000,00</p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>61 - Total de Materiais (R$)</label>
                            <p>R$1000,00</p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>62 - Total de OPME (R$)</label>
                            <p>R$1000,00</p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>63 - Total de Medicamentos (R$)</label>
                            <p>R$1000,00</p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>64 - Total de Gases Medicinais (R$)</label>
                            <p>R$1000,00</p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>65 - Total Geral (R$)</label>
                            <p>R$1000,00</p>
                        </div>

                    </div>
                    <div className='line'>

                        <div className="box" style={{ width: '100%', }}>
                            <label>66 - Assinatura do Responsável pela Autorização</label>
                            <p></p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>67 - Assinatura do Beneficiário ou Responsável</label>
                            <p></p>
                        </div>
                        <div className="box" style={{ width: '100%', }}>
                            <label>68 - Assinatura do Contratado</label>
                            <p></p>
                        </div>
                       
                    </div>



                </div>
            </div>
        </div >
    )
}
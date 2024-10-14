import './GuiaSadt.css'

export default function GuiaSadt({ data, func }) {

    return (
        <>
            <div className="btn_backGuia">
                <button onClick={() => window.print()}>Imprimir</button>
                <button onClick={() => func.setGuiaActive(false)}>Voltar</button>
            </div>
            <img className='guiasadt' src="/guiassadt.png" alt="" style={{ background: '#fff' }} />
            <div className="sadt__content">
                <div className="logo__imageSadt">
                    <img src={`./plansLogo/${data.plan}.png`} alt='Logo do plano de saúde' />
                </div>
                <div className="contant__patient">
                    <p>{data.planNumber}</p>
                    <p>{data.name}</p>
                </div>
                <div className="content__contrat">
                    <p>{localStorage.getItem('Cnpj')}</p>
                    <p >{localStorage.getItem('Name')}</p>
                </div>
                <div className="content__doctor">
                    <p>{data.doctor}</p>
                    <p>CRM</p>
                    <p>{data.crm}</p>
                    <p>RJ</p>
                    <p>{data.cbo}</p>
                </div>
                <div className="content__data">
                    <p>{data.carater}</p>
                    <p>{data.dateSol.split('-').reverse().join('/')}</p>
                    <p>{data.ind}</p>
                </div>
                <div className="content__proced">
                    <p>{data.tuss1 && '22'}</p>
                    <p>{data.tuss1}</p>
                    <p>{data.proced1}</p>
                    <p >{data.qtd1 === '' ? '' : data.qtd1?.toString().padStart(2, '0')}</p>
                </div>
                <div className="content__proced">
                    <p>{data.tuss2 && '22'}</p>
                    <p>{data.tuss2}</p>
                    <p>{data.proced2}</p>
                    <p >{data.qtd2 === '' ? '' : data.qtd2?.toString().padStart(2, '0')}</p>
                </div>
                <div className="content__proced">
                    <p>{data.tuss3 && '22'}</p>
                    <p>{data.tuss3}</p>
                    <p>{data.proced3}</p>
                    <p >{data.qtd3 === '' ? '' : data.qtd3?.toString().padStart(2, '0')}</p>
                </div>
                <div className="content__proced">
                    <p>{data.tuss4 && '22'}</p>
                    <p>{data.tuss4}</p>
                    <p>{data.proced4}</p>
                    <p >{data.qtd4 === '' ? '' : data.qtd4?.toString().padStart(2, '0')}</p>
                </div>
                <div className="content__proced">
                    <p>{data.tuss5 && '22'}</p>
                    <p >{data.tuss5}</p>
                    <p >{data.proced5}</p>
                    <p >{data.qtd5 === '' ? '' : data.qtd5?.toString().padStart(2, '0')}</p>
                </div>
                <div className="content__contrat">
                    <p>{localStorage.getItem('Cnpj')}</p>
                    <p >{localStorage.getItem('Name')}</p>
                    <p >{localStorage.getItem('Cnes')}</p>
                </div>

            </div>

            <div id="logoImage">
                {/* <img id="logo" src={`./plansLogo/${data.plan}.png`} alt="logo do plano de saúde" /> */}
            </div>

        </>


    )
}
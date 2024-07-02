import './Guia.css'

export default function Guia({ data, func }) {


    return (
        <>
            <div className="btn_backGuia">
                <button onClick={() => window.print()}>Imprimir</button>
                <button onClick={() => func.setGuiaActive(false)}>Voltar</button>
            </div>
            <img src="/guiaint.png" alt="" />
            <div className="dados">
                <p id="guia">{data.guia}</p>
                <p id="dataAut">{data.dateAut.split('-').reverse().join('/')}</p>
                <p id="senha">{data.password}</p>
                <p id="carteira">{data.planNumber}</p>
                <p id="nome">{data.name}</p>
                <p id="cnpj1">{localStorage.getItem('Cnpj')}</p>
                <p id="contratado1">{localStorage.getItem('Name')}</p>
                <p id="medico">{data.doctor}</p>
                <p id="conselho">CRM</p>
                <p id="crm">{data.crm}</p>
                <p id="uf">RJ</p>
                <p id="cbo">{data.cbo}</p>
                <p id="cnpj2">{data.contratado === 'chn' && '60884855001207'} {data.contratado === 'hi' && '31671480000308'}</p>
                <p id="contratado2">{data.contratado === 'chn' && 'CHN - Complexo Hospitalar de Niterói'} {data.contratado === 'hi' && 'Hospital Icaraí'}</p>
                <p id="carater">{data.carater}</p>
                <p id="tipo">{data.type}</p>
                <p id="regime">1</p>
                <p id="diariaSol">{data.daily}</p>
                <p id='opme'>{data.opme}</p>
                <textarea id="anexo" defaultValue={data.ind} disabled></textarea>
                <p id="cid">{data.cid}</p>
                <div className="tuss">
                    <div className="tabela">
                        <p id="tb1">{data.tuss1 && "22"}</p>
                        <p id="tb2">{data.tuss2 && "22"}</p>
                        <p id="tb3">{data.tuss3 && "22"}</p>
                        <p id="tb4">{data.tuss4 && "22"}</p>
                        <p id="tb5">{data.tuss5 && "22"}</p>
                        <p id="tb5">{data.tuss6 && "22"}</p>
                    </div>
                    <div className="codigos">
                        <p id="cod1">{data.tuss1}</p>
                        <p id="cod2">{data.tuss2}</p>
                        <p id="cod3">{data.tuss3}</p>
                        <p id="cod4">{data.tuss4}</p>
                        <p id="cod5">{data.tuss5}</p>
                        <p id="cod5">{data.tuss6}</p>
                    </div>
                    <div className="descricao">
                        <p id="des1">{data.proced1}</p>
                        <p id="des2">{data.proced2}</p>
                        <p id="des3">{data.proced3}</p>
                        <p id="des4">{data.proced4}</p>
                        <p id="des5">{data.proced5}</p>
                        <p id="des5">{data.proced6}</p>
                    </div>
                    <div className="quantidade">
                        <p >{data.qtd1 === '' ? '' : data.qtd1?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd2 === '' ? '' : data.qtd2?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd3 === '' ? '' : data.qtd3?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd4 === '' ? '' : data.qtd4?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd5 === '' ? '' : data.qtd5?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd6 === '' ? '' : data.qtd6?.toString().padStart(2, '0')}</p>
                    </div>
                    <div className="quantidadeAut">
                        <p >{data.qtd1 === '' ? '' : data.qtd1?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd2 === '' ? '' : data.qtd2?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd3 === '' ? '' : data.qtd3?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd4 === '' ? '' : data.qtd4?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd5 === '' ? '' : data.qtd5?.toString().padStart(2, '0')}</p>
                        <p >{data.qtd6 === '' ? '' : data.qtd6?.toString().padStart(2, '0')}</p>
                    </div>
                </div>
                <p id="diariaAut">{data.daily}</p>
                <p id="leito">{data.typeRoom}</p>
                <p id="cnpj3"></p>
                <p id="contratado3"></p>
                <p id="dataSol">{data.dateSol.split('-').reverse().join('/')}</p>
                <div id="logoImage">
                    <img id="logo" src={`./plansLogo/${data.plan}.png`} alt="logo do plano de saúde" />
                </div>
            </div>
        </>
    )
}
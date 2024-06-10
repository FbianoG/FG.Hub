import { useEffect, useState } from 'react'
import './Ramais.css'
import { GetRamais } from '../../api/getApi'

import SearchBar from '../../components/Common/SearchBar'
import Loading from '../../components/Common/Loading'
import ToastAlert from '../../components/Common/ToastAlert'
import Header from '../../components/Shared/Header'

export default function Ramais() {

    const [showAlert, setShowAlert] = useState(false)
    const [ramais, setRamais] = useState(null)
    const [findRamais, setFindRamais] = useState(null)

    useEffect(() => {
        async function init() { // ! Fazer a tratativa de erros
            try {
                const response = await GetRamais()
                setRamais(response)
                setFindRamais(response)
            } catch (error) {
                setShowAlert({ type: 'error', title: 'Error', text: error.message })
            }
            setTimeout(() => setShowAlert(false), 6000)
        }
        init()
    }, [])


    function search(text) {
        setFindRamais(ramais.filter(element => element.setor.includes(text.toLowerCase())))
    }


    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Lista de Ramais</h1>
                <SearchBar search={search} />
                {findRamais?.length == 0 && <h3 style={{ margin: '0 auto' }}>Não há ramais cadastrados no banco de dados!</h3>}
                {findRamais?.length > 0 &&
                    <>
                        <div className="ramais__list-legend">
                            <span>Setor</span>
                            <span>Ramal</span>
                        </div>
                        <ul className='ramais__list' >
                            {findRamais.map(element => (
                                <li key={element._id} className="ramais__iten">
                                    <label>{element.setor}</label>
                                    <span>{element.ramal}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            </div>
            {!ramais && <Loading />}
            {showAlert && <ToastAlert data={showAlert} />}
        </>
    )
}
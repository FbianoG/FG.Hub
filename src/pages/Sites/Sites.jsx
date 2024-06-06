import { useEffect, useState } from 'react'
import './Sites.css'
import { GetSites } from '../../api/getApi'
import Loading from '../../components/Common/Loading'
import ToastAlert from '../../components/Common/ToastAlert'
import Header from '../../components/Shared/Header'

export default function Sites() {

    const [sites, setSites] = useState(null)
    const [showAlert, setShowAlert] = useState()

    useEffect(() => { loadSites() }, [])

    async function loadSites() {
        try {
            const response = await GetSites()
            setSites(response)
        } catch (error) {
            setTextAlert(error.message)
            setTypeAlert('error')
            setShowAlert(true)
        }
        setTimeout(() => setShowAlert(false), 6000)
    }


    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Sites Corporativos</h1>
                <div className="sites__list">
                    {sites?.length == 0 && <h3 style={{ margin: '0 auto' }}>Não há sites cadastrados no banco de dados!</h3>}
                    {sites?.map(element => (
                        <a key={element._id} href={element.web} target='_blank' className="site__iten">
                            <img src={element.src} alt={element.name} />
                            <span>{element.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {!sites && <Loading />}
            {showAlert && <ToastAlert text={textAlert} type={typeAlert} />}
        </>
    )
}
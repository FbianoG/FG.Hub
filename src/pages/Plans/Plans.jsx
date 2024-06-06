import { useEffect, useRef, useState } from 'react'
import { GetPlans } from '../../api/getApi'
import './Plans.css'
import Modal from '../../components/Common/Modal'
import CardPlans from '../../components/Layout/CardPlans'
import SearchBar from '../../components/Common/SearchBar/'
import ToastAlert from '../../components/Common/ToastAlert'
import Loading from '../../components/Common/Loading'
import Header from '../../components/Shared/Header'

export default function Plans() {

    const [showAlert, setShowAlert] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [Plans, setPlans] = useState(null)
    const [FindPlans, setFindPlans] = useState(null)
    const [DataPlan, setDataPlan] = useState(null)

    const timeoutId = useRef(null)

    function copyText(text) {
        if (timeoutId.current) clearTimeout(timeoutId.current)
        const copyText = text.target.textContent
        navigator.clipboard.writeText(copyText)
        setShowAlert({ text: `Texto copiado '${copyText}'`, type: 'alert' })
        timeoutId.current = setTimeout(() => setShowAlert(false), 6000)
    }

    async function getPlans() {
        try {
            const response = await GetPlans()
            setPlans(response)
            setFindPlans(response)
        } catch (error) {
            console.log(error)
            setShowAlert({ text: error.message, type: 'error' })
        }
        setTimeout(() => setShowAlert(false), 6000)
    }

    async function selectPlan(id) {
        setDataPlan(Plans.find(element => element._id === id))
        setShowModal(true)
    }

    function search(e) {
        setFindPlans(Plans.filter(element => element.name.includes(e.toLowerCase())))
    }

    useEffect(() => {
        getPlans()
    }, [])

    return (
        <>
            <Header />
            <div className='content'>
                <div className='title'>Planos e Convênios</div>
                <SearchBar search={search} />
                <div className='listPlans'>
                    {FindPlans?.length == 0 && <h3 style={{ margin: '0 auto' }}>Não há planos cadastrados no banco de dados!</h3>}
                    {FindPlans?.length > 0 && FindPlans.map(element => <CardPlans key={element._id} plan={element} copyText={copyText} selectPlan={selectPlan} />)}
                    {!FindPlans && <Loading />}
                </div>
                {showAlert && <ToastAlert text={showAlert.text} type={showAlert.type} />}
                {showModal && <Modal dataPlan={DataPlan} setShowModal={setShowModal} />}
            </div>
        </>
    )
}
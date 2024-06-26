import { useEffect, useState } from 'react'
import { GetTerms } from '../../api/getApi'
import './Terms.css'


import SearchBar from '../../components/Common/SearchBar'
import Loading from '../../components/Common/Loading'
import ToastAlert from '../../components/Common/ToastAlert'
import Header from '../../components/Shared/Header'
// import storage from '../../../firebase'

export default function Terms({ }) {

    const [showAlert, setShowAlert] = useState(false)

    const [Terms, setTerms] = useState(null)
    const [FindTerms, setFindTerms] = useState(null)

    function search(text) {
        setFindTerms(Terms.filter(element => element.name.includes(text.toLowerCase())))
    }

    useEffect(() => {
        async function init() { // ! Fazer a tratativa de erros
            try {
                const response = await GetTerms()
                setTerms(response)
                setFindTerms(response)
            } catch (error) {
                setShowAlert({ type: 'error', title: 'Erro', text: error.message })
            }
            setTimeout(() => setShowAlert(false), 6000)
        }
        init()
    }, [])

    const [imgUrl, setImgUrl] = useState('')
    const [progress, setProgress] = useState(0)
    const [user, setUser] = useState(true);



    const styleCategory = (e) => {
        if (e === 'outros') return { color: "darkgoldenrod" }
        else if (e === 'policial') return { color: "dodgerblue" }
        else if (e === 'emergência') return { color: "#ee7878" }
        else if (e === 'internação') return { color: "mediumseagreen" }
    }


    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Termos e Documentos</h1>
                <SearchBar search={search} />
                {FindTerms?.length == 0 && <h3 style={{ margin: '0 auto' }}>Não há termos cadastrados no banco de dados!</h3>}
                {FindTerms?.length > 0 &&
                    <>
                        <div className="terms__list-legend">
                            <span>Documento</span>
                            <span>Categoria</span>
                            <span>PDF</span>
                        </div>
                        <ul className='ramais__list' >
                            {FindTerms.map(element => (
                                <li key={element._id} className="terms__iten">
                                    <span className='  '>{element.name}</span>
                                    <span style={styleCategory(element.category)}>{element.category}</span>
                                    <a href={element.src} target='_blank'><i className="fa-regular fa-file-pdf"></i></a>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            </div>
            {!Terms && <Loading />}
            {showAlert && <ToastAlert data={showAlert} />}
        </>
    )
}
import Header from '../../components/Shared/Header'
import './Label.css'

export default function Label() {

    return (
        <>
            <Header />
            <div className="content">
                <h1 className='title'>Gerar Etiquetas</h1>
                <div className="label">
                    <img src='./dasa-chn.png' alt='Logo CHN' className='label__img' />
                    <textarea className="label__text" maxLength={36}></textarea>
                </div>
                <button className="label__btn" onClick={print}><i className="fa-solid fa-print"></i>Imprimir</button>
            </div>
        </>

    )
}
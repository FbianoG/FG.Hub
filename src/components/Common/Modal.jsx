import './Modal.css'

export default function Modal({ dataPlan, setShowModal }) {

    return (
        <div className="modal">
            <div className="modalContent">
                <div className="modal__row head">
                    <h2 className="modalContent-title">{dataPlan.name}</h2>
                    <p className='modalContent-content'>{dataPlan.data.cod}</p>
                </div>
                <div className="modal__row">
                    <label className="modalContent-subtitle">Telefone</label>
                    <p className='modalContent-content'>{dataPlan.data.tel}</p>
                </div>
                <div className="modal__row">
                    <label className="modalContent-subtitle">Email</label>
                    <p className='modalContent-content'>{dataPlan.data.email}</p>
                </div>
                <div className="modal__row">
                    <label className="modalContent-subtitle">Autorização</label>
                    <p className='modalContent-content'>{dataPlan.data.att}</p>
                </div>
                <div className="modal__row">
                    <label className="modalContent-subtitle">Guia</label>
                    <p className='modalContent-content'>{dataPlan.data.guia}</p>
                </div>
                <div className="modal__row">
                    <label className="modalContent-subtitle">Senha</label>
                    <p className='modalContent-content'>{dataPlan.data.senha}</p>
                </div>
                <div className="modal__row">
                    <label className="modalContent-subtitle">Observação</label>
                    <p className='modalContent-content'>{dataPlan.data.obs}</p>
                </div>





                {/* <label className="modalContent-subtitle">Telefone</label>
                <p className='modalContent-content'>{dataPlan.data.tel}</p>
                <label className="modalContent-subtitle">Email</label>
                <p className='modalContent-content'>{dataPlan.data.email}</p>
                <label className="modalContent-subtitle">Autorização</label>
                <p className='modalContent-content'>{dataPlan.data.att}</p>
                <label className="modalContent-subtitle">Senha</label>
                <p className='modalContent-content'>{dataPlan.data.senha}</p>
                <label className="modalContent-subtitle">Guia</label>
                <p className='modalContent-content'>{dataPlan.data.guia}</p>
                <label className="modalContent-subtitle">Observação</label>
                <p className='modalContent-content'>{dataPlan.data.obs}</p> */}
                <button className='modalContent-btn' onClick={() => setShowModal(false)}>Fechar</button>
            </div>
        </div>
    )
}
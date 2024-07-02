import './Modal.css'

export default function Modal({ dataPlan, setShowModal }) {

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="content__row head">
                    <h2 className="content__row-title">{dataPlan.name}</h2>
                    <p className='content__row-text'>Cod: {dataPlan.data.cod}</p>
                </div>
                <div className="content__row">
                    <label className="content__row-subtitle">Telefone</label>
                    <p className='content__row-text'>{dataPlan.data.tel}</p>
                </div>
                <div className="content__row">
                    <label className="content__row-subtitle">Email</label>
                    <p className='content__row-text'>{dataPlan.data.email}</p>
                </div>
                <div className="content__row">
                    <label className="content__row-subtitle">Autorização</label>
                    <p className='content__row-text'>{dataPlan.data.att}</p>
                </div>
                <div className="content__row">
                    <label className="content__row-subtitle">Guia</label>
                    <p className='content__row-text'>{dataPlan.data.guia}</p>
                </div>
                <div className="content__row">
                    <label className="content__row-subtitle">Senha</label>
                    <p className='content__row-text'>{dataPlan.data.senha}</p>
                </div>
                <div className="content__row">
                    <label className="content__row-subtitle">Observação</label>
                    <textarea defaultValue={dataPlan.data.obs} disabled></textarea>

                </div>
                <button className='content__row-btn' onClick={() => setShowModal(false)}>Fechar</button>
            </div>
        </div>
    )
}
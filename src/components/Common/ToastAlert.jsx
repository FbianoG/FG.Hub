import './ToastAlert.css'

export default function ToastAlert({data}) {
    //  recebe title e type


    return (
        <div className='toastAlert'>
            {data.type === 'error' && <i className="fa-regular fa-circle-xmark toastAlert-icon" style={{ background: '#c53030' }}></i>}
            {data.type === 'alert' && <i className='fa-solid fa-circle-exclamation toastAlert-icon' style={{ background: '#416bc9' }}></i>}
            {data.type === 'success' && <i className="fa-regular fa-circle-check toastAlert-icon" style={{ background: 'mediumseagreen' }}></i>}
            <div className='toastAlert-data'>
                <h3 className='toastAlert-title'>{data.title}</h3>
                <span className='toastAlert-text'>{data.text}</span>
            </div>
        </div >
    )

}
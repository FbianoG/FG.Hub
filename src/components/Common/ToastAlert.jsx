import './ToastAlert.css'

export default function ToastAlert(props) {
    //  recebe title e type
    let toastBg
    let title
    if (props.type === 'success') {
        toastBg = { background: 'mediumseagreen' }
        title = 'Sucesso'
    }
    else if (props.type === 'error') {
        toastBg = { background: '#c53030' }
        title = 'Erro'
    }
    else if (props.type === 'alert') {
        toastBg = { background: '#416bc9' }
        title = 'Alerta'
    }

    return (
        <div className='toastAlert' style={toastBg}>
            <i className='fa-solid fa-circle-exclamation toastAlert-icon'></i>
            <div className='toastAlert-data'>
                <h3 className='toastAlert-title'>{title}</h3>
                <span className='toastAlert-text'>{props.text}</span>
            </div>
        </div >
    )

}
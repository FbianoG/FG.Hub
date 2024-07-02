import './CardPlans.css'

export default function CardPlans({ plan, copyText, selectPlan }) {

    function goLink() {
        if (!plan.web) return
        window.open(plan.web, '_blank')
    }

    return (
        <div className='cardPlan'>
            <h3 className='cardPlan__title'>{plan.name}</h3>
            <div className='data'>
                <span className='data__label'>User:</span>
                <span className='data__content' onClick={(e) => copyText(e)}>{plan.login}</span>
            </div>
            <div className='data'>
                <span className='data__label'>Senha:</span>
                <span className='data__content' onClick={(e) => copyText(e)}>{plan.password}</span>
            </div>
            <div className='group__btn'>
                <i className='fa-regular fa-folder-open' title='Detalhes do Plano' onClick={() => selectPlan(plan._id)}></i>
                <i className='fa-solid fa-link' title='Acessar Site' onClick={goLink}></i>
            </div>
        </div>
    )
}
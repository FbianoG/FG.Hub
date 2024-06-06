import './CardPlans.css'

export default function CardPlans({ plan, copyText, selectPlan }) {

    function goLink() {
        if (!plan.web) return
        window.open(plan.web, '_blank')
    }

    return (
        <div className='cardPlan'>
            <h3 className='cardPlan-Title'>{plan.name}</h3>
            <div className='cardPlan-data'>
                <span className='cardPlan-dataLegend'>User:</span>
                <span className='cardPlan-dataContent' onClick={(e) => copyText(e)}>{plan.login}</span>
            </div>
            <div className='cardPlan-data'>
                <span className='cardPlan-dataLegend'>Senha:</span>
                <span className='cardPlan-dataContent' onClick={(e) => copyText(e)}>{plan.password}</span>
            </div>
            <div className='cardPlan-buttons'>
                <i className='fa-solid fa-folder-open' title='Detalhes do Plano' onClick={() => selectPlan(plan._id)}></i>
                <i className='fa-solid fa-link' title='Acessar Site' onClick={goLink}></i>
            </div>
        </div>
    )
}
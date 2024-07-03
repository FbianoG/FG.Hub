import { useState } from 'react'
import './Header.css'



export default function Header({ pageActive }) {

    const [showMenu, setShowMenu] = useState(false)

    const route = window.location.pathname

    return (
        <>
            <header>
                <ul className='list__icon'>
                    <span>Hub</span>
                    <i className="fa-solid fa-notes-medical" id={route == '/planos' ? 'active' : ''}></i>
                    <i className="fa-solid fa-suitcase-medical" id={route == '/termos' ? 'active' : ''}></i>
                    <i className="fa-solid fa-file-waveform" id={route == '/guias' ? 'active' : ''}></i>
                    {/* <i className="fa-solid fa-hospital-user"></i> */}
                    {/* <i className="fa-solid fa-address-card" id={route == '/etiqueta' ? 'active' : ''}></i> */}
                    <i className="fa-solid fa-phone" id={route == '/ramais' ? 'active' : ''}></i>
                    <i className="fa-solid fa-network-wired" id={route == '/sites' ? 'active' : ''}></i>
                    <i className="fa-solid fa-gears" id={route == '/config' ? 'active' : ''}></i>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    
                </ul>
                <ul className="menu">
                    <div className="menu__logo">
                        FG.Hub
                        <span className='menu__logo-legend'>Fast Guidance Hub</span>
                    </div>
                    <li className="menu__iten" onClick={() => location.href = '/planos'}><i className="fa-solid fa-caret-right"></i>Planos e Convênios</li>
                    <li className="menu__iten" onClick={() => location.href = '/termos'}><i className="fa-solid fa-caret-right"></i>Termos</li>
                    <li className="menu__iten" onClick={() => location.href = '/guias'}><i className="fa-solid fa-caret-right"></i>Guias</li>
                    {/* <li className="menu__iten" onClick={() => pageActive('')}><i className="fa-solid fa-caret-right"></i>Cadastro</li> */}
                    {/* <li className="menu__iten" onClick={() => location.href = '/etiqueta'}><i className="fa-solid fa-caret-right"></i>Etiqueta</li> */}
                    <li className="menu__iten" onClick={() => location.href = '/ramais'}><i className="fa-solid fa-caret-right"></i>Ramais</li>
                    <li className="menu__iten" onClick={() => location.href = '/sites'}><i className="fa-solid fa-caret-right"></i>Sites</li>
                    <li className="menu__iten" onClick={() => location.href = '/config'}><i className="fa-solid fa-caret-right"></i>Configurações</li>
                    <li className="menu__iten" onClick={() => location.href = '/'}><i className="fa-solid fa-caret-right"></i>Logout</li>
                </ul>

                {window.innerWidth <= 767 &&
                    <button className='btnMenu'><i className="fa-solid fa-bars"></i></button>
                }
            </header>
        </>
    )
}
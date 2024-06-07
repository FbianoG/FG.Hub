import { useState } from 'react'
import './Header.css'



export default function Header({ pageActive }) {

    const [showMenu, setShowMenu] = useState(false)




    return (
        <>
            <header>
                <ul className='header-listIcon'>
                    <i className="fa-solid fa-book-medical active"></i>
                    <i className="fa-solid fa-file-medical"></i>
                    <i className="fa-solid fa-file-waveform"></i>
                    {/* <i className="fa-solid fa-hospital-user"></i> */}
                    <i className="fa-solid fa-tags"></i>
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-solid fa-network-wired"></i>
                    <i className="fa-solid fa-gears"></i>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </ul>
                <div className="header-menu">
                    <div className="header-logo">
                        FG.Torrent
                        <span className='header-logoDetails'>Fabiano Gonçalves</span>
                    </div>
                    <ul className='header-menuList'>
                        <li className="header-menuListIten" onClick={() => location.href = '/planos'}><i className="fa-solid fa-caret-right"></i>Planos e Convênios</li>
                        <li className="header-menuListIten" onClick={() => location.href = '/termos'}><i className="fa-solid fa-caret-right"></i>Termos</li>
                        <li className="header-menuListIten" onClick={() => location.href = '/guias'}><i className="fa-solid fa-caret-right"></i>Guias</li>
                        {/* <li className="header-menuListIten" onClick={() => pageActive('')}><i className="fa-solid fa-caret-right"></i>Cadastro</li> */}
                        <li className="header-menuListIten" onClick={() => location.href = '/etiqueta'}><i className="fa-solid fa-caret-right"></i>Etiqueta</li>
                        <li className="header-menuListIten" onClick={() => location.href = '/ramais'}><i className="fa-solid fa-caret-right"></i>Ramais</li>
                        <li className="header-menuListIten" onClick={() => location.href = '/sites'}><i className="fa-solid fa-caret-right"></i>Sites</li>
                        <li className="header-menuListIten" onClick={() => location.href = '/config'}><i className="fa-solid fa-caret-right"></i>Configurações</li>
                        <li className="header-menuListIten" onClick={() => location.href = '/'} style={{margin: 'auto 0 0 0'}}><i className="fa-solid fa-caret-right"></i>Logout</li>
                    </ul>
                </div>
            </header>
        </>
    )
}
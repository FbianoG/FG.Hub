import './SearchBar.css'

export default function SearchBar({ search }) {

    return (
        <div className='searchBar'>
            <i className="fa-solid fa-magnifying-glass searchBar-Icon"></i>
            <input type='search' placeholder='Pesquisar' onChange={(e) => search(e.target.value)} />
        </div>
    )
}
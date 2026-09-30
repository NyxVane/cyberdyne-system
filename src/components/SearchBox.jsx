export default function SearchBox({ searchChange }) {
    return(
        <div className="pa2">
            <input type="search" className="pa3 ba b--green bg-lightest-blue" placeholder="model keresés..." onChange={searchChange} />
        </div>
    )
}
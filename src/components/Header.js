

function Header({title}) {
    
    return (
        <header className="text-center mb-5"> 
            <h1> {title} </h1> 
        </header>
    )
}


Header.defaultProps = {
    title: "Website Title",
}

export default Header

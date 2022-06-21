import { Link } from "react-router-dom";

const Error404 = ()=>{
    return(
        <>
            <div style={{color:'white', marginTop:'70px', marginLeft:'50px'}}>
                <h3>
                    Error404
                </h3>
                <p>Not Found</p>
                <Link to="/" style={{color:'lightblue'}}><h2>Volver al inicio</h2></Link>
            </div>
        </>
    )
}

export default Error404;
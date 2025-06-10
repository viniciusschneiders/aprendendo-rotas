import { useParams } from 'react-router-dom';




function Produto(){

    const {id} = useParams();

    return (

        <div>

            <h1>qual é o produto??</h1>
            <br/>
           <span> MEU PRODUTO é {id} </span>

        </div>

    )

}


export default Produto;
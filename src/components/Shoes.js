const Shoes = (props) => {

    return(

<div className="card">
    <div className='card-body'>
        <h5 className="card-title"> For {props.shoes.category}</h5>
        <p className="card-text"> {props.shoes.color}</p>
        <p className="card-text"> {props.shoes.model}</p>
        <p className="card-text"> {props.shoes.size}</p>
        <p className="card-text"><a href="https://www.salomon.com/en-us/shop/collection/salomon-shoes.html?CMPID=ps%7csb%7cbing%7cSLM_CategoryShoes-ONG-ECM-USA_SEA_B_LW_BRM.%7cAll%20-%20Running%20Shoes%7cshop%20shoes%20by%20color%7c81845010159868&utm_source=bing&utm_medium=paidsearch&utm_content=aa1309518578790413-cc81845010159868&utm_term=shop%20shoes%20by%20color&utm_campaign=SLM_CategoryShoes-ONG-ECM-USA_SEA_B_LW_BRM.&gclid=f92c56b9b76911897d28356683caf8f1&gclsrc=3p.ds&&msclkid=f92c56b9b76911897d28356683caf8f1&utm_source=bing&utm_medium=cpc&utm_campaign=SLM_CategoryShoes-ONG-ECM-USA_SEA_B_LW_BRM.&utm_term=salmon%20runningshoes&utm_content=All%20-%20Running%20Shoes&gclid=f92c56b9b76911897d28356683caf8f1&gclsrc=3p.ds" target="_blank"><button>Buy now</button></a></p>
     

    </div>
</div>

    )
}
export default Shoes;
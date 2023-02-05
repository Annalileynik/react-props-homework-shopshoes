import Shoes from "./Shoes";

const Categories = (props) => {

    return (
        <div className="col">

            <h3>
                <i>    {props.categories.title}
                </i>
            </h3>
            <br/> <h6> {props.categories.description}</h6>
            <hr/>
            {props.shoes.filter(el=>
            props.categories.title===el.category)
                .map(el=>
                <Shoes key={el.id} shoes={el}
                />)
            }
        </div>
    )
}
export default Categories;
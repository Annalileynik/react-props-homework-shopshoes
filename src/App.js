import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuidv4} from 'uuid'
import Categories from "./components/Categories";
import Header from "./Image/Header";
import { Button } from 'react-bootstrap'
function App() {
    const categories = [
        {
            id: uuidv4(),
            title: "Men",
            description: "Shoes for men, size 37-48 EUR"
        },
        {
            id: uuidv4(),
            title: "Women",
            description: "Shoes for women, size 37-43 EUR"
        },
        {
            id: uuidv4(),
            title: "Teen",
            description: "Shoes for teen, size 32-36 EUR"
        },
        {
            id: uuidv4(),
            title: "Kids",
            description: "Shoes for kids, size 25-31 EUR"
        },
        {
            id: uuidv4(),
            title: "Baby",
            description: "Shoes for baby, size 5-24 EUR"
        }
    ]

    const shoes = [
        {
            id: uuidv4(),
            category: "Women",
            color: "Black",
            model: "New collection",
            size: 37,

        }, {
            id: uuidv4(),
            category: "Men",
            color: "Black",
            model: "New collection",
            size: 37,
        }, {
            id: uuidv4(),
            category: "Teen",
            color: "Black",
            model: "New collection",
            size: 35,
        }, {
            id: uuidv4(),
            category: "Kids",
            color: "Black",
            model: "New collection",
            size: 28,
        }, {
            id: uuidv4(),
            category: "Baby",
            color: "White",
            model: "New collection",
            size: 7,
        }, {
            id: uuidv4(),
            category: "Women",
            color: "Pink",
            model: "Previous collection",
            size: 41,
        }, {
            id: uuidv4(),
            category: "Women",
            color: "Blue",
            model: "Previous collection",
            size: 39,
        }, {
            id: uuidv4(),
            category: "Men",
            color: "Yellow",
            model: "Previous collection",
            size: 43,
        }, {
            id: uuidv4(),
            category: "Kids",
            color: "Orange",
            model: "Previous collection",
            size: 31,
        }, {
            id: uuidv4(),
            category: "Baby",
            color: "Beige",
            model: "Previous collection",
            size: 17,
        }, {
            id: uuidv4(),
            category: "Baby",
            color: "Brown",
            model: "New collection",
            size: 7,
        }, {
            id: uuidv4(),
            category: "Teen",
            color: "Blue",
            model: "New collection",
            size: 35,
        }, {
            id: uuidv4(),
            category: "Men",
            color: "Red",
            model: "New collection",
            size: 46,
        },
    ]
    return (

        <div>
            <Header />
            <div className="row align-items-state">
                {categories.map(el=>
                <Categories key={el.id}
                            categories={el}
                            shoes={shoes}
                    />
                    )
                }


            </div>
        </div>

    );
}

export default App;

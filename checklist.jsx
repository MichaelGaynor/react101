var table = [
    {
        title: "Sporting Goods",
        products: [
            {
                price: '$49.99',
                name: 'Football',
                inStock: true
            },
            // {
            //  category: 'Junk',   
            //  price: '$49.99',
            //  name: 'Football',
            //  inStock: true
            // },   
            {
                price: '$9.99',
                name: 'Baseball',
                inStock: true
            },
            {
                price: '$29.99',
                name: 'Basketball',
                inStock: false
            }
        ] 
    },
    {
        title: "Electronics",
        products: [
            {
                price: '$99.99',
                name: 'iPod Touch',
                inStock: true
            }, 
            {
                price: '$399.99',
                name: 'iPhone 5',
                inStock: false
            },
            {
                price: '$199.99',
                name: 'Nexus 7',
                inStock: true
            }
        ] 
    }
]

function ProductCategoryRow(props){
    return(
        <div className = "row">
            <div className = "item col-sm-12">
                <div className = "product col-sm-5 col-sm-offset-2">
                    {props.product}
                </div>
                <div className = "price col-sm-3">
                    {props.price}
                </div>
            </div>
        </div>
    )
}

function ProductCategory(props){
    var itemArray = [];
    props.products.map((thisItemArray,index)=>{
        itemArray.push(<ProductCategoryRow key={index} product={thisItemArray.name} price={thisItemArray.price}/>)
    })
    return(
        <div className="col-sm-12 text-left">
            <div className="row text-center">
                <div className="productCategory col-sm-12">
                    {props.title}
                </div>
            </div>
            {itemArray}
        </div>
    )
}

function ProductTable(props){
    var productsArray = [];
    props.table.map((thisProductCategory, index)=>{
        productsArray.push(<ProductCategory key={index} title={thisProductCategory.title} products={thisProductCategory.products}/>)
    })
    return(
        <div className="row">
            {productsArray}
        </div>
    )
}

function SearchBar(props){
    return(
        <div className="row">
            <form>
                <div className="col-sm-10 col-sm-offset-1">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="col-sm-10 col-sm-offset-1">
                    <input type="checkbox"/> Only show products in stock
                </div>
            </form>
        </div>
    )
}

function FilterableProductTable(props){
    return(
        <div className="FilterableProductTable col-sm-6 col-sm-offset-3">
            <SearchBar/>
            <ProductTable table={props.table}/>
        </div>
    )
}

ReactDOM.render(
    <FilterableProductTable table={table}/>,
    document.getElementById('groot')
)
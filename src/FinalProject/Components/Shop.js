import { useState } from "react";
import { products } from "../../Redux/Reducer/reducer";
import { useSelector, useDispatch } from "react-redux"

{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link> */}
export default function ShowProducts() {

    const products = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    return (
        <>
            {/* < div class="card" style="width: 18rem;" >
                <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}

            <h1>Array: </h1>
            {products.map((item) => (
                        <div class="card" style={{"width": "18rem"}}>
                        <img class="card-img-top" src={item.img} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
            





                // <h3>{item.Code}</h3>
                // <h3>{item.Price}</h3>
                // <h3>{item.Color}</h3>
                // <h3>{item.Qty}</h3>

            )


            )}
            {/* <button onClick={(e) => {e.preventDefault(); dispatch(addToCart("1"))}}></button> */}


        </>
    )
}


// import a from "../Pictures/1.jpg"
// import cart from "../Pictures/cart1.png"

// import { addToCart } from "../redux/actions/cartAction";
// export default function Shop() {

//     return (
//         <>
//             {products.map((item) => (
//                 // <h3>{item._id} {item.name} {item.description}</h3>
//                 <div className="card" style={{ "width": "18rem"}}>
//                     <img className={a} src={a}></img>
//                     <div className="card-body">
//                         <center>
//                             <h5 className="card-title">{item.name}</h5>
//                         </center>
//                         <p className="card-text">price: {item.price}</p>
//                         <button onClick={(e) => {e.preventDefault(); dispatch(addToCart("1"))}}><img className={cart} src={cart} style={{"width": "25px"}}></img></button>
//                         {/* <a href="#details" className="btn btn-primary">more details</a> */}
//                         {/* <button type="button" classNames="btn btn-primary" data-toggle="modal" data-target="#details">more Details</button> */}
//                         {/* <div className="modal fade" id="details" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                             <div className="modal-dialog">
//                                 <div className="modal-content">
//                                     <div className="modal-header">
//                                         <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
//                                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                     </div>
//                                     <div className="modal-body">
//                                         <h3>hoiuhntbfgyrge</h3>
//                                     </div>
//                                     <div class="modal-footer">
//                                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                         <button type="button" className="btn btn-primary">Understood</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>

//             ))}
//             {/* <button type="button" classNames="btn btn-primary" data-bs-toggle="modal" data-bs-target="#details">
//                 more Details
//             </button>
//             <div className="modal fade" id="details" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                            <h3>hoiuhntbfgyrge</h3>
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary">Understood</button>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </>
//     )
// }

// {/* <div><img className={d} src={d} width={450}></img></div> */ }




import { UseSelector, useDispatch, useSelector} from "react-redux";
import { reduceQty, increaseQty } from "../Redux/action/reduceQty";


export default function UserDetails(){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);
    return(<>
        <h1>{user.Type}</h1>
        <h2>{user.Price}</h2>
        <h2>{user.Color}</h2>
        <h2>{user.Qty}</h2>
        <h2>{user.Img}</h2>
        <button onClick={(e) =>{
            e.preventDefault();
            dispatch(reduceQty());
            //צריך לשלוח לפונקציה שמעדכנת את העגלה
            //dispatch()
        }}>add to cart</button>
    </>)
}




//{
    // Code: '10',
    // Type: 'hat',
    // Price: 50,
    // Color: 'red',
    // Qty:26,
    // Img: '../img1.jpg'
//}
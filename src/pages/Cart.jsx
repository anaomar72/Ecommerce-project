import { useDispatch, useSelector } from "react-redux"
import PriceCart from "../Components/PriceCart"
import toast, { Toaster } from 'react-hot-toast';
import  { calculateTotalPrice, removeItemFromCart } from "../redux/reducer/cart"
function Cart (){
    const dispatch=useDispatch()
    const allItems = useSelector((state) => state.cart.items)
    const hanleRemove=(data)=>{
        dispatch(removeItemFromCart(data))
    toast.success("item is removed",{
        position:"top-right"
    })

    
        dispatch(calculateTotalPrice())
    }

    return <div>
        {/* <h1 className="text-2xl ">This is cart page</h1> */}
        {
              allItems.length > 0 ?
        
        <div className="sm:flex gap-8 sm:justify-center">
        <div className="sm:mr-32 sm:mb-20">

        

        {
          allItems.map((items) =>{
                return <div className="flex gap-6 border-2 border-gray-400 px-4 py-5 m-5 sm:w-[500px] w-[350px] h-[200px] sm:h-[160px]">
                <img className="rounded  w-[100px] h-[100px]" src={items.image} />

                <div>
                <h1 className="text-black text-3xl "> {items.title} </h1>
                <h1 className="font-border ">{items.price}</h1>

                </div>
                <button onClick={()=> hanleRemove(items)} className="text-3xl  ">X</button>
    
                  </div>
            })
        }
         </div>
            < PriceCart/>
        </div>
        :<p className="text-4xl text-center">The Cart is Empty</p>
    }

    <Toaster/>
    </div>
}

export default Cart
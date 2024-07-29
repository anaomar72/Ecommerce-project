import { useSelector } from "react-redux"

function priceCart(){
    const price=useSelector((state)=> state.cart.totalPrice)
    const totalQuantity=useSelector((state)=> state.cart.items)
    return <div>
        <div className="w-[300px] mx-10 sm:fixed sm:right-24 h-[300px] p-4 border-2 border-gray-500">
            <h1 className="text-2xl"> Total quantity</h1>
            <h1 className="font-bold text-2xl">{totalQuantity.length}</h1>
            <h1 className="mt-8 text-2xl">Total price</h1>
            <h1 className="font-bold">${price}</h1>
            <button className="bg-black px-24 mt-10 text-white">Pay Now</button>
        </div>
    </div>
}

export default priceCart
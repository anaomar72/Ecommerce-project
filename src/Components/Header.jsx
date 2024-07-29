import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
function Header({search}){
    const numberOfItem=useSelector((state)=>state.cart.items)
    return <div className="fixed w-full ">
    <div className="bg-primaryColor text-white flex justify-around sm:px-20 px-1 py-5 ">
        <h1 className="text-white sm:text-3xl text-1xl">eSuuq</h1>
        <ul className="flex sm:gap-7 gap-3 sm:text-3xl  ">
            <li>Home</li>
            <li>About</li>
        </ul>
        <form >
            <input onChange={search} className="sm:w-[400px] h-[40px]  rounded text-black" type="text" placeholder="Search item" />
        </form>
        <Link to="/cart">
       <i class="fa-solid fa-cart-shopping text-yellow-200 sm:text-4xl text-2xl ">{numberOfItem.length }</i>
        </Link>
    </div>
    </div>
}
export default Header
function Header({search}){
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
        <h1 className="text-yellow-200 sm:text-4xl text-2xl"><i class="fa-solid fa-cart-shopping"></i></h1>
    </div>
    </div>
}
export default Header
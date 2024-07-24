function Product({items}){
    return <div id="box" className="w-full  sm:m-3  border-2 border-black p-2  rounded mt-[100px]">
        <img className="rounded w-full h-[200px]" src={items.image} />
        <div className="flex justify-between m-2  text-1xl">
        <p className="font-bold">{items.title}</p>
        <p className="font-bold hidden sm:block">{items.category.name}</p>
        </div>
        <div className="flex justify-between sm:mt-6">
        <h1 className="font-semibold text-2xl my-1">${items.price}</h1>
        <button id="cartBtn" className="sm:w-[40px] sm:h-[40px] hidden sm:block  w-[30px] h-[40px] text-3xl text-white bg-primaryColor rounded-full">+</button>
        </div>
       
    </div>
  

}
export default Product
import React from 'react'
const Cards = ({item}) => {
  const {id, name, type, price, description, image, category} = item;
  return (
    <>
    <div>
    <div className="card w-96 p-2 scale-90 hover:scale-95 duration-300 bg-gray-50 text-black shadow-xl">
    <figure><img className='w-full h-60' src={image} alt="FreeBooks" /></figure>
    <div className="card-body ">
    <div className="badge badge-outline">{type}</div>
      <h2 className="card-title">
        {name}
        <div className="badge badge-secondary text-white">{category}</div>
      </h2>
      <p className='text-sm'>{description}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">$ {price}</div> 
        <button className=" bg-orange-400 hover:bg-gray-400 text-white px-4 py-1 rounded-md ">By Now</button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Cards

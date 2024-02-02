const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col 
    w-full max-sm:w-full'>
      <img src={imgURL} 
      alt={name} 
      className='w-[282px] h-[282px]' />
        

    </div>
  )
}

export default PopularProductCard
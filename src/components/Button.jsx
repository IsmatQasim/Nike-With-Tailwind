
const Button = ({label , iconURL}) => {
  return (
    <button className="flex justify-center
    items-center gap-2 px-7 py-4 border font-montserrat
    text-lg leading-none bg-blue-500
    rounded-full text-white
    border-blue-500
    hover:bg-blue-600"
     >
        {label}
        {iconURL && <img 
        src={iconURL}
        alt="Arrow right icon"
        className="ml-2 rounded-full
        w-5 h-5"
        /> }
    </button>
  )
}

export default Button
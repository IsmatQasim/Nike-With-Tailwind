
const Button = ({label , iconURL, backgroundColor, textColor,
borderColor, hoverBackgroundColor, fullWidth }) => {
  return (
    <button className={`flex justify-center
    items-center gap-2 px-7 py-4 border font-montserrat
    text-lg leading-none transition ease-in-out
    hover:-translate-y-1 hover:scale-110
    ${
      backgroundColor
       ? `${backgroundColor} ${textColor} ${borderColor} ${hoverBackgroundColor}`
    :"bg-blue-500 text-white border-blue-500 hover:bg-blue-600  "}'
    rounded-full ${fullWidth && 'w-full'}`}>
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
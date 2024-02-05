import { offer } from "/assets/images"
import { arrowRight } from "/assets/icons"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap
    items-center max-xl:flex-col-reverse 
    gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer}
        width={733}
        height={687}
        className="object-contain w-full"
        />
      </div>
      <div
      className="flex flex-1
      flex-col">
        <h2 className="font-palanquin
        text-4xl capitalize lg:max-w-lg
        font-bold">
          <span className=" text-blue-500 ">
          Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg
        info-text">
          Ensuring premium comfort and
          style, our meticulously crafted
          footwear is designed to elevate
          your experience , providing you with
          unmatch quality, innovation, and a touch
          of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg
        info-text">
          Ensuring premium comfort and
          style, our meticulously crafted
          footwear is designed to elevate
          your experience , providing you with
          unmatch quality, innovation, and a touch
          of elegance.
        </p>
        <div className="mt-11 flex flex-wrap
        gap-4">
        <Button label="Shop Now"
        iconURL={arrowRight}/>
        <Button 
        label="Learn more"
        backgroundColor ="bg-white" 
        borderColor ="border-slate-gray"
        textColor="text-slate-gray"
        hoverBackgroundColor="hover:bg-white"

        />

          </div> 
      </div>

    </section>
   )
}

export default SpecialOffer
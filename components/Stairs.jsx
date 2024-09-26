import { motion } from "framer-motion"

//variants
const stairAnimation = {
    intial: {
        top : "0%",
    },
    animate: {
        top : "100%",
    },
    exit: {
        top : ["100%", "0%"],
    },
}


const Stairs = () => {
  return <>
    {/* render 6 motion divs each representing a step of the stairs.
    Each div will have the same animation defined by the stairsAnimation object 
    The delay for each div is calculated dynamically based on its reversed index,
    creating a staggering effect with decreasing delay for each subsequent step.
    */}


  </>
}

export default Stairs
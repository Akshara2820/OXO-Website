import React, { useEffect, useRef,useState } from "react";
import styled from "styled-components";
import { AnimatePresence,useAnimation, motion, useCycle } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "Pages", to: "#", id: 2 },
  { name: "Feature", to: "#", id: 3 },
  { name: "Overview", to: "#", id: 4 },
  { name: "Pricing", to: "#", id: 5 },
  { name: "FAQ'S", to: "#", id: 6 }
];
const itemVariants = {
  closed: { opacity: 0 }, open: { opacity: 1 }};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};
function Header() {
  const [open, cycleOpen] = useCycle(false, true);
  const control = useAnimation();
  const [ref, inView] = useRef();

  useEffect(() => {
    if (inView) {
      control.start("hidden");
    } else {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <Root>
      <div className="flex justify-between m-4">
      <div className="flex-1">
        <img  src="./image/oxo-logo.png" alt="loding..." className="object-contain" />
        </div>
        <div className="hidden text-[14px] lg:flex gap-12 items-center font-semibold font-['Poppins'] flex-1 cursor-pointer">
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-1">
              <span>Home </span>
              <FaAngleDown />
            </div>
            <div className="flex items-center gap-1">
              <span>Pages </span>
              <FaAngleDown />
            </div>
            <div>Feature</div>
            <div>Overview</div>
            <div>Pricing</div>
            <div>FAQ'S</div>
          </div>
          <div>
            <button className="bg-[#da3654] px-8 py-2 rounded-full">
              Get&nbsp;Started
            </button>
          </div>
        </div> 

        <AnimatePresence>
        {open && (
          <motion.aside initial={{y:-100 }} animate={{ y:1  }} exit={{ transition: { delay: 0.5, duration: 0.3 }}} >
            <motion.div  initial="closed" animate="open"  exit="closed" variants={sideVariants}>
              {links.map(({ name, to, id }) => (
                <motion.a  key={id} href={to} variants={itemVariants} >
                  {name}
                  <hr/>
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
        </AnimatePresence>
        <motion.div> 
        <button onClick={cycleOpen} className="relative z-10">{open ?
         <AiOutlineMenu className="lg:hidden block text-4xl rounded py-1  border bg-white text-black"/> 
         : <AiOutlineClose className="lg:hidden block text-4xl rounded py-1 bg-white text-black "/>}
        </button>
        </motion.div>   
      </div>
      
    </Root>
  );
}

export default Header;
const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  position: relative;

  aside {
  position: absolute;
  background-color: #ffc05e;
  top: 70px;
  width:100%;
}
 a {
  color: #f9fafb;
  text-decoration: none;
  font-weight: 600;
  display: block;
  margin: 20px;
}
`;

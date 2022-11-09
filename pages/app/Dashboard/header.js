import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, useAnimation, motion, useCycle } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "Pages", to: "#", id: 2 },
  { name: "Feature", to: "#", id: 3 },
  { name: "Overview", to: "#", id: 4 },
  { name: "Pricing", to: "#", id: 5 },
  { name: "FAQ'S", to: "#", id: 6 },
];
const itemVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
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
          <img
            src="./image/oxo-logo.png"
            alt="loding..."
            className="object-contain"
          />
        </div>
        <div className="hidden text-[14px] lg:flex gap-12 items-center font-semibold font-['Poppins'] flex-1 cursor-pointer">
          <div className="flex gap-8 items-center">
            <div class="dropdown">
              <button class="dropbtn">
                Home <FaAngleDown />
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div class="dropdown">
                <button class="dropbtn">
                  Pages
                  <FaAngleDown />
                </button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <div>Feature</div>
            <div>Overview</div>
            <div>Pricing</div>
            <div>FAQ'S</div>
          </div>

          <div>
            <button className="bg-[#da3654] px-12 py-3 rounded-full">
              Get&nbsp;Started
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ y: -100 }}
              animate={{ y: 1 }}
              exit={{ transition: { delay: 0.5, duration: 0.3 } }}
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.a key={id} href={to} variants={itemVariants}>
                    {name}
                    <hr />
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
        <motion.div>
          <button onClick={cycleOpen} className="relative z-10">
            {open ? (
              <AiOutlineMenu className="lg:hidden block text-4xl rounded py-1  border bg-white text-black" />
            ) : (
              <AiOutlineClose className="lg:hidden block text-4xl rounded py-1 bg-white text-black " />
            )}
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
    width: 100%;
  }
  a {
padding: 10px;
    color: #f9fafb;
    text-decoration: none;
    font-weight: 600;
    display: block;
  }
  .dropbtn {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .dropdown {
    position: relative;
  }
  .dropdown-content {
    position: absolute;
    text-align: left;
    min-width: 220px;
    list-style: none;
    left: 0;
    top: 30px;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 5%);
    background-color: #fff;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s ease-in;
  }
  .dropdown-content a {
    color: black;
    display: block;
    margin-left: 0;
    line-height: 24px;
    font-size: 14px;
    border-bottom: 1px solid rgb(220 219 228) ;
  }
  .dropdown-content a:hover {
    background-color:  #16215c;
    padding: 10px ;
    color: #f9fafb;
  }
  .dropdown:hover .dropdown-content {
    display: block;
    opacity: 1;
  } 
`;

import React from "react"
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
function Card({ data ,reference }) {
  return (
    <motion.div className="relative flex-shrink-0 w-60 h-80 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden flex" drag dragConstraints={reference} whileDrag={{scale:1.1}} 
    dragTransition={{bounceStiffness:600, bounceDamping:20}}>
      <FaRegFileAlt size="2em"/>
      <p className="text-sm leading-tight font-semibold mt-10">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="px-8 py-3 flex justify-between mb-5">
          <h5>{data.filesize}</h5>
          <span className="bg-zinc-600 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-zinc-800">
            {data.close ? <IoMdClose size=".7em" color="#fff" /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {
          data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}  flex item-center justify-center`}>
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}


export default Card
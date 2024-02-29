import React from 'react'
import {FaRegFileAlt} from "react-icons/fa";
import {LuDownload} from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data ,refrance}) {
  return (
    <div>
        <motion.div drag dragConstraints={refrance} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-9 overflow-hidden'>
             <FaRegFileAlt/>
             <p className='text-sm mt-5 font-semibol leading-tights'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0'>
                <div className='flex items-center justify-between  px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center'>
                        {data.close?<IoIosClose /> : <LuDownload size=".8em" color='#000' />}
                    </span>
                </div>
                {
                data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "green"? "bg-green-600": "bg-sky-600"}  flex items-center justify-center`}>
                    <h3 className='text-sm  font-semibold  flex justify-center items-center'>{data.tag.tagTitle} </h3>
                </div>
                )
                }
            </div>
        </motion.div>
    </div>
  )
}

export default Card
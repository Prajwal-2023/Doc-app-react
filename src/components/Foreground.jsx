import React,{useRef, useState}from 'react'
import Card from './Card'

function Foreground(){
  const xyz=useRef(null);
  const data = [
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:false,
      tag: { isOpen:true, tagTitle:"Download Now", tagColor:"green"},

    },
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:false,
      tag: { isOpen:true, tagTitle:"Download Now", tagColor:"blue"},

    },
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:true,
      tag: { isOpen:false, tagTitle:"Upload", tagColor:"green"},

    }
  ]
  return(
     <div ref={xyz} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap px-10'>
      {data.map((item, index)=>(
        <Card data={item} reference={xyz}/>
      ))}
      </div>

  )
}

export default Foreground
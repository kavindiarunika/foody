import React from 'react'
import { Button } from './ui/button'
import { Home , Contact, NotebookTabs , } from 'lucide-react';



function Navbar() {

    const navlinks =[
        {
            name:'Home',
            link:'/',
            icon:Home
        },
        {
            name:'About',
            link:'/about',
            icon:NotebookTabs
        },
        {
            name:'Contact',
            link:'/contact',
            icon:Contact
        }
    ]

  return (
    <div className='w-full h-16 bg-gray-600/50 flex '> 
    {/* desktop view */}
    <div className='flex flex-row items-center gap-12 px-4 '>
       {/* icon */}
       <img src="/logo.png" alt="logo" className='w-10 h-10' />

         {/* navlinks */}
         <div className='flex gap-4'>
            {navlinks.map((links ,index)=>(
                <link href={links.link} key={index}>
                    <links.icon />
                    <span>{links.name}</span>
                </link>

            ))}
         </div>

         {/* auth buttons */ }
         <div>
            
            <Button>add you order</Button>

         </div>
          

    </div>
     

     

    </div>
  )
}

export default Navbar

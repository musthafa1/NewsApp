import React, {useState} from 'react'
import { Menu, Search, X} from 'lucide-react'
import {Link} from 'react-router-dom'
import axios from 'axios'



const links =["Business", "Entertainments", "General", "Health", "Science", "Sports", "Technology"]
const Navbar = ({setArticles}) => {
const [open, setOpen] = useState(false)

  const handleSearch = async (e) => {
    const search = e.target.value
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`)

      setArticles(res.data.articles)
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <div className='fixed w-full bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <Link to={`/`} >
        
        <div className='md:text-2xl text-lg font-bold text-blue-600 cursor-pointer'>
            NewsApp
        </div>
        </Link>
        {/* Destop LInks */}
        <div className='hidden md:flex space-x-6'>
            {
                links.map((link)=>{
                    return <Link to={`/${link.toLowerCase()}`} key={link} className='text-gray-700 hover:text-blue-600 transition'>
                        {link}
                    </Link>
                })
            }
        </div>
        <div className='flex items-center justify-center gap-4'>
            <div className='relative bg-gray-200 p-2 rounded-lg'>
               <Search className='absoulte left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4'/>
               <input onChange={handleSearch} type="text" placeholder='Search news...' className='md:pl-10 pl-7 w-30 md:w-64 outline-none focus:outline-none'/> 
            </div>
           
            {/* Moblie menu button */}
            <button onClick={() => setOpen(!open)} className='md:hidden'>
              {
                open ? <X size={25}/> : <Menu size={25}/>
              }
                
            </button>
        </div>
      </div>
      {/* moblie menu */}
      {
        open && (
          <div className='md:hidden px-4 pb-4'>
            {
              links.map((link) => {
                return <Link key={link} to={`/${link.toLowerCase}`} onClick={() => setOpen(false)}
                className='block py-2 text-gray-700 hover:text-blue--600 transition'>
                  {link}
                </Link>
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default Navbar

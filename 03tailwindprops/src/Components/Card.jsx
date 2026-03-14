import React from 'react'

function Card() {


   const cardsDate =[
     {
      id: 1,
      img:"src/",
      sticky:"Featured",
      username:"Ali Khan",
      dec:"This is first card description",
      btntext: "Read More",
      view: 120
     },
     {
    id: 2,
    img:"src/",
    sticky: "Popular",
    username: "Ahmed",
    dec: "This is second card description",
    btntext: "Explore",
    view: 98
  },
  {
    id: 3,
    img:"src/",
    sticky: "New",
    username: "Sara",
    dec: "This is third card description",
    btntext: "Details",
    view: 210
  }
   ]
   return (
    
     <div className='grid lg:grid-cols-3  first-letter: gap-2'>
     {cardsDate.map((item) =>(
      <div key={item.id} className="w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:transform hover:scale-105 group">
       <div  className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={item.img}
          alt="Featured content"
          className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-black rounded-full mb-3">
         {item.sticky}
        </span>
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
          {item.username}
        </h2>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
       {item.dec}
      </p>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 bg-white hover:bg-gray-200 text-black text-sm rounded-lg transition-colors duration-200">
          {item.btntext}
        </button>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{item.view}</span>
        </div>
      </div>
     </div> 
     ))}
    </div>
        
  )
}

export default Card

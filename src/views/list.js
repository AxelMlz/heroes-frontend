import React, { Component,  useEffect, useState } from 'react';
import '../index.css';

export default function List () {
  const [heroes, setHeroes] = useState([]);
  const [alias, setAlias] = useState('')
  const [list, setList] = useState(true);
  const [card, setCard] = useState(false);
  const [change, setChange] = useState('');


  useEffect(() => {
      // componentDidMount
      fetch("http://localhost:8000/heroes")
          .then((res) => res.json())
          .then((res) => {
              console.log(res);
              setHeroes(res);
          });
  }, []);


return (

<> 

{heroes.map((hero) => (

 <div class="">

   <div className=" p-4 grid grid-cols-1 gap-1 flex">

        <div className="max-w-md rounded overflow-hidden shadow-lg p-5 m-15 flex-1 ...">

                    <div className="font-bold text-xl mb-2">{hero.heroName} </div>

                    <div className="px-6 py-4">

                        Power/s : {hero.power.join(', ')}
                      
                        <p>age : {hero.age}</p>

                        <p>Status : {hero.isAlive}</p>

                    </div>

        </div>

        {/* <div className="max-w-md rounded overflow-hidden shadow-lg p-5 basis-2/2 md:basis-2/2">
                    <div className="font-bold text-xl mb-2">{hero.heroName} </div>
                    <div className="px-6 py-4">

                        Power/s : {hero.power.join(', ')}
                      
                        <p>Age : {hero.age}</p>

                        <p>Status : {hero.isAlive}</p>
                        
                    </div>

                    <div class="px-6 pt-4 pb-2">
                        <ul> 
                            {heroes.power.map((i) => { 
                                return ( 
                                    
                                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{i.power}</span>)})
                                  
                                }
                            
                        </ul>
                    </div>
      </div>  */}

  </div>  

</div>
  ))}

  </>
)}
  

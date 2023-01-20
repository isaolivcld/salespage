import React, { useState, useEffect} from 'react'
import CopyBtn from '../Utilities/CopyBtn'
import PE_1 from '../images/PE_1.png'
import PE_2 from '../images/PE_1.png'
import PE_3 from '../images/PE_1.png'
import {VendaseSuporte} from '../Utilities/ImagensVendasESuporte'
import { Outlet } from 'react-router-dom'
 

const PlanosDeEstudo = () => {



async function copyToClipBoard(src) {
  const data = await fetch(src)
  const blob = await data.blob();

    try{
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        })
      ])
      console.log("Sucess");
    } catch(e) {
      console.log(e)
    }
} 
    


  return (
    <div className='w-full pt-[5rem] px-4 max-w-[1240px] mx-auto'>
      <div className='text-[40px] text-black mb-4'>
        <h1>Comercial - Vendas/Suporte</h1>
      </div>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3s'>
            <div className='grid grid-cols-5 justify-between max-w-[1240px] gap-10 pl-estudos'>
                {VendaseSuporte.map(image => 
                <div key={image.src} className='grid mx-auto'>
                  <img src={image.src} alt="/"></img> 
                      <div className='text-center mt-3' >{image.caption}</div>
                     <button className='btncopy' onClick={() => copyToClipBoard(image.src)} /* style={{backgroundColor: btnCollor}} */>
                        Copiar
                     </button>
                </div>
              )}
          </div>
        </div>
        <Outlet/>
    </div>
  )
  
}

export default PlanosDeEstudo
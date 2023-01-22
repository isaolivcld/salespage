import React, { useState, useEffect} from 'react'
import CopyBtn from '../Utilities/CopyBtn'
import {VendaseSuporte} from '../Utilities/ImagensVendasESuporte'
import { BrowserRouter, Link } from 'react-router-dom'


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
      console.log("Imagem copiada");
    } catch(e) {
      console.log(e)
    }
} 

const [isToggle, setIsToggle] = useState(1)

const toggleTab = (index) =>{
    setIsToggle(index)
    console.log('estou funcionando')
    
}
  return (
    <div className='w-full pt-[5rem] px-4 max-w-[1240px] mx-auto'>
      {/* Título */}
      <div className='text-[40px] text-black mb-4'>
        <h1>Comercial - Vendas/Suporte</h1>
      </div>
      <div className='navToggle'>
            {/* Navegação interna */}
        <button className={isToggle === 1 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)}>Geral</button>
        <button className={isToggle === 2 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)}>Emoji</button>
        <button className={isToggle === 3 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(3)}>Planos de assinatura</button>
        <button className={isToggle === 4 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(4)}>Conteúdos da plataforma</button>
      </div>
      
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3s'>
            <div className='grid grid-cols-5 justify-between max-w-[1240px] gap-10 pl-estudos '>
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
    </div>
  )
  
}

export default PlanosDeEstudo
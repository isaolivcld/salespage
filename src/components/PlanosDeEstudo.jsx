import React, { useState, useEffect} from 'react'
import CopyBtn from '../Utilities/CopyBtn'
import PE_1 from '../images/PE_1.png'
import PE_2 from '../images/PE_1.png'
import PE_3 from '../images/PE_1.png'
import {VendaseSuporte} from '../Utilities/ImagensVendasESuporte'
 

const PlanosDeEstudo = () => {


/*   const VendaseSuporte = [
    { src: PE_1, caption: 'Abacaxi 1' },
    { src:'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d3d8739b-56d0-4273-aff8-6596fcaa2209/NUBANK_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230120T130847Z&X-Amz-Expires=86400&X-Amz-Signature=118e9431210b1fad6f3f2df179fc4a549383a40d0ac29f13ea097143e9da0087&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D"NUBANK%2520%281%29.png"&x-id=GetObject', caption: 'Imagem 2' },
    { src:'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d126c1f-09cc-42b4-ae87-8e37979b3bf8/BRADESCO.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230120T134255Z&X-Amz-Expires=86400&X-Amz-Signature=aaac29043caef18a3d893528287dfdc0556c197a345b4bc9c38df2d7e98fea5e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D"BRADESCO.png"&x-id=GetObject', caption: 'Kiwi 3' },
] */

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
    </div>
  )
  
}

export default PlanosDeEstudo
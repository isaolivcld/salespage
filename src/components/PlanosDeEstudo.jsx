import React,{Fragment, useState, useEffect} from 'react'
import CopyBtn from '../Utilities/CopyBtn'

const PlanosDeEstudo = () => {

 /*  function writeToCanvas(src) {
    return new Promise((res) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')
      const img = new Image();
      img.src = src;

      img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0,0);
        canvas.toBlob((blob) =>{
          res(blob);
        }, 'image/png' )
      }
    })
  } */

  return (
    <div className='w-full pt-[5rem] px-4 max-w-[1240px] mx-auto'>
      <div className='text-[40px] text-black mb-4'>
        <h1>Planos de Estudo</h1>
      </div>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3s'>
            <div className='flex justify-between max-w-[1240px] gap-4 pl-estudos'>
                {images.map(image => 
                <div key={image.src} className='grid mx-auto'>
                  <img src={image.src} alt="/"></img> 
                      <div className='text-center mt-3' >{image.caption}</div>
                     <button className='btncopy' onClick={() => copyToClipBoard(image.src, setBtnCollor())} style={{backgroundColor: btnCollor}}>
                        {btnText}
                     </button>
                </div>
              )}
          </div>
        </div>
    </div>
  )
  
}

export default PlanosDeEstudo
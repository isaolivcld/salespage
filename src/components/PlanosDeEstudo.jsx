import React,{Fragment, useState, useEffect} from 'react'
import PE_1 from '../images/PE_1.png'
import PE_2 from '../images/PE_2.png'
import PE_3 from '../images/PE_3.png'


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

  const [btnCollor, setBtnCollor] = useState ('#6E2CFA')

  const handleBtnCollor = () =>{
    setBtnCollor(!btnCollor)
  }

  function changeBtnCollor (){
      setBtnCollor('green');
      setTimeout(() => {
      setBtnCollor('#6E2CFA')
      }, 2000);
        }
/*   const images = [{PE_1,},PE_2,PE_3]; */
   const images = [
    { src:PE_1, caption: 'Imagem 1' },
    { src:PE_2, caption: 'Imagem 2' },
    { src:PE_3, caption: 'Imagem 3' },
  ]; 

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

      changeBtnCollor()
      
    } 
    
    const [btnText, setBtnText] = useState ('')
    
    useEffect(()=>{
      if(btnCollor === 'green'){
        setBtnText ('Copiado!')
        } else {
            setBtnText('Copiar')
        } 
      
    }, [btnCollor])

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
                     <button id='btn-copy' className='btncopy' onClick={() => copyToClipBoard(image.src, setBtnCollor)} style={{backgroundColor: btnCollor}}>
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
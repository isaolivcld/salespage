import React, {useState} from 'react'
import classNames from 'classnames'

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
const CopyBtn = ({copyToClipBoard}) => {

  const [isPressed, setIsPressed] = useState(false);
  const btnClass = classNames({
    btn: true,
    'btnOnClick': isPressed
  })
  const btnClick = () =>{
    setIsPressed(true);
    
  }


  return (
    <button onClick={CopyBtn}></button>
  )
}

export default CopyBtn


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
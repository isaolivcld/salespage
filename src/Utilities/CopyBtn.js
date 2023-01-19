
  const [btnCollor, setBtnCollor] = useState ('#6E2CFA')

  const handleBtnCollor = () =>{
    setBtnCollor(!btnCollor)
  }

/*   const images = [{PE_1,},PE_2,PE_3]; */

   const images = [
    { src:PE_1, caption: 'Abacaxi 1' },
    { src:PE_2, caption: 'Imagem 2' },
    { src:PE_3, caption: 'Kiwi 3' },
  ]; 

  function changeBtnCollor (){
    setBtnCollor('green');
    setTimeout(() => {
    setBtnCollor('#6E2CFA')
    }, 2000);
      }

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

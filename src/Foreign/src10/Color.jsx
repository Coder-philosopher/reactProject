function Color({Name,Hexcode}) {
  return (
    <div>
      <button className=' custom-button h-10 w-20 rounded-full text-fuchsia-600 font-sans font-bold border-1 border-[#E1FF00] mx-2' style={{backgroundColor: Hexcode}} 
      onClick={ ()=>{
        document.body.style.backgroundColor = Hexcode;
      }}>{Name}</button>
    </div>
  )
}

export default Color
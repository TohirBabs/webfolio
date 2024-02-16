function Home () {


const list = [
  {emoji:"🔭", info:"currently building web widgets @ pandawidgets.com"},
  {emoji:"🎓", info:"in my final year studying engineering at Unilag"},
  {emoji:"✍", info:"i write whenever i feel the muse"},
  {emoji:"💬", info:"love chatting about technology, movies and music"},
  {emoji:"🧠", info:"learning Typescript and skateboarding"},
  {emoji:"😄", info:"pronouns he/him"},
  {emoji:"🇳🇬", info:"based in lagos, Nigeria"},
  {emoji:"⚡", info:"fun fact: i blink alot less than average"},

]
    return (
    <div className="lg:max-w-3xl lg:p-2 p-1  flex flex-col gap-10">
      <div className=" text-sm lg:text-base flex flex-col lg:gap-6 gap-4">
             <h2 className="lg:text-3xl text-2xl font-semibold">about_me.md</h2>

      <p className="leading-snug max-w-2xl"> Hi there!&#x1F44B;
        I'm <span className="font-semibold">Tohir</span>, a ui developer focused on building beautiful, snappy user interfaces and performant,
         scalable web applications.</p>         
        <ul className="flex flex-col gap-1 lg:p-4 p-1 text-xs lg:text-sm rounded-xl bg-gradient-to-br from-zinc-200 to-white border">
          {list.map((about, index)=> (
                      <li key={index} className="flex items-center gap-2 ">
                        <span className="text-lg flex items-center justify-center w-8 h-7 bg-white border rounded">
                        {about.emoji}</span>  
                        <span>{about.info}</span> 
                      </li>       

          ))}
        </ul>
    </div>
    {/* <div className="flex flex-col gap-3">
        <p>currently...</p>
        <div className=" grid grid-cols-12  lg:gap-5 gap-2">
            <div className="flex flex-col gap-2 lg:p-3 p-1 col-span-6 rounded-xl border bg-white shadow">
            <p className="text-xs bg-red-200 shadow border w-max p-1 px-2 rounded-md ">reading.&#128214;</p>
            <div className="flex relative  rounded-lg lg:h-[26rem] h-[16rem] overflow-hidden bg-cyan-600">
            <img src="/stormlight.jpeg" alt="" className="object-cover w-full h-full" />
            </div></div>
            <div className="flex flex-col gap-2 lg:p-3 p-1 col-span-6 rounded-xl border bg-white shadow">
            <p className="text-xs bg-red-200 shadow border w-max p-1 px-2 rounded-md ">watching.&#127871;</p>
            <div className="flex relative  rounded-lg lg:h-[26rem] h-[16rem] overflow-hidden bg-cyan-600">

            <img src="/succession.jpeg" alt="" className="object-cover w-full h-full" />
            </div></div>
            
        </div>
    </div> */}
</div>)
}

export default Home;

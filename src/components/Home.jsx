function Home () {
    return (
    <div className="lg:max-w-3xl p-2  flex flex-col gap-10">
      <div className=" text-sm lg:text-base flex flex-col lg:gap-6 gap-4">
             <h2 className="lg:text-3xl text-2xl font-semibold">about_me.md</h2>

      <p className="leading-snug max-w-2xl"> Hi there!&#x1F44B;
        I'm <span className="font-semibold">Tohir</span>, a ui developer focused on building beautiful, snappy user interfaces and performant,
         scalable web applications.</p>         
        <ul className="flex flex-col gap-2 p-4 text-xs lg:text-sm rounded-xl bg-gradient-to-br from-slate-100 to-white border">
          <li>🔭 currently building web widgets @ pandawidgets.com</li>   
          <li>&#127891; in my final year studying engineering at Unilag</li>
          <li>&#9997; I write <strike className="italic">frequently</strike>  whenever i feel the muse</li>
          <li>&#128172; love chatting about technology, movies and music</li>
          <li>&#129504; learning Typescript and skateboarding</li>
          <li>😄 pronouns he/him</li>
          <li>🇳🇬 based in lagos, Nigeria </li>
          <li>⚡ fun fact: i blink alot less than average</li>
        </ul>
    </div>
    {/* <div className="flex flex-col gap-3">
        <p>currently...</p>
        <div className=" grid grid-cols-12  lg:gap-5 gap-2">
            <div className="flex flex-col gap-2 lg:p-3 p-1 col-span-6 rounded-xl border bg-white shadow">
            <p className="text-xs bg-red-200 shadow border w-max p-1 px-2 rounded-md ">reading.&#128214;</p>
            <div className="flex relative  rounded-lg lg:h-[26rem] h-[16rem] overflow-hidden bg-slate-600">
            <img src="/stormlight.jpeg" alt="" className="object-cover w-full h-full" />
            </div></div>
            <div className="flex flex-col gap-2 lg:p-3 p-1 col-span-6 rounded-xl border bg-white shadow">
            <p className="text-xs bg-red-200 shadow border w-max p-1 px-2 rounded-md ">watching.&#127871;</p>
            <div className="flex relative  rounded-lg lg:h-[26rem] h-[16rem] overflow-hidden bg-slate-600">

            <img src="/succession.jpeg" alt="" className="object-cover w-full h-full" />
            </div></div>
            
        </div>
    </div> */}
</div>)
}

export default Home;

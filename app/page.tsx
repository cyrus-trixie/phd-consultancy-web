export default function Home() {
  return (
  <main>
    {/*section1 will go here*/}
    <section className="h-screen justify-center">
      <div className="grid grid-cols-2">
         {/*lynne intro*/}
        <div>
<p className="text-base font-text-chaos-gold ">The Psychology of Becoming</p>
      <h1 className="text-4xl font-serif text-chaos-navy">Welcome to Cost of Chaos</h1>
        </div>
         {/*lynne image*/}
         <div>
        <img src="./public/images/1.png" alt="Lynne Image" className="w-full h-auto"/>
         </div>

      </div>
      
      </section>
  </main>
  )
}
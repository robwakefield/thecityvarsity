import { Bebas_Neue, Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className={"flex max-w-full min-h-screen flex-col items-center justify-start "+bebas.className}>

      <nav className="py-4 bg-bg w-screen container text-center text-2xl text-primary">
        <b>The Kinscape City Varsity VI</b>
      </nav>

      <div className="py-12 bg-hero bg-cover bg-no-repeat bg-center container text-center text-primary">
        <h1 className="text-7xl px-60">
          <b>The biggest rugby clash of the year</b>
        </h1>
        <h2 className="text-3xl">
          <b>11.03.23</b>
        </h2>
      </div>

      <div className="py-6 px-40 bg-bg container text-center">
        <h1 className="pb-4 text-4xl text-purple">
          About The City Varsity
        </h1>
        <p className={"text-l text-secondary "+montserrat.className}>
          The City Varsity is an exhibition rugby match between Imperial College London and London School of Economics, held annually at the world-class facilities of Rosslyn Park RFC. It is a completely student-led initiative and aims to remain an event created by students, for students. It has proven to be a great success in previous years with hundreds of spectators attending to witness both men’s and women’s game and the trophies - JP Morgan Shield and the Rees Rawlings Cup – being awarded.
        </p>
      </div>

      <div className="flex flex-row">
        <div className="py-6 px-10 bg-bg container text-center">
          <h1 className={"pb-4 text-4xl text-purple"+montserrat.className}>
            Event History
          </h1>
          <p className={"text-l text-secondary "+montserrat.className}>
          Started in 2017 to support Matt Hampson foundation, the event proved most popular among the students of both Imperial and LSE, attracting almost 1000 spectators every year.
          </p>
        </div>
        <div className="py-6 px-10 bg-bg container text-center">
          <h1 className={"pb-4 text-4xl text-purple"+montserrat.className}>
            Matt Hampson Foundation
          </h1>
          <p className={"pb-4 text-l text-secondary "+montserrat.className}>
            Matt has started his foundation in 2011 to help people suffering from serious sport injuries. All our profits go to Matt Hampson foundation.
          </p>
          <button className="bg-purple rounded-sm">
            <h1 className="py-4 px-8 text-lg text-primary">
              Find out more
            </h1>
          </button>
        </div>
      </div>

      <div className="py-6 px-40 container text-center">
        <h1 className="pb-4 text-4xl text-purple">
          Our Partners
        </h1>
        <div className="flex flex-row justify-start">
          <div className="flex flex-col justify-around">
            <img></img>
            <h1 className="text-center text-primary">
              Kinscape
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}

// Fonts from Google Fonts
import { Bebas_Neue, Montserrat } from 'next/font/google'

// Import components to use here
import Header from '@/components/header'
import Title from '@/components/title'
import CenteredText from '@/components/text'
import { TextRow, TextRowItem } from '@/components/textRow'

// If loading a variable font, you don't need to specify the font weight
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className={"flex flex-col h-screen items-center justify-start"}>
      {/* Add items from components/ folder to create page layout */}
      {Header("The Kinscape City Varsity VI", bebas)}
      {Title("The biggest rugby clash of the year", "11.03.23", "Buy Tickets", bebas)}
      {CenteredText("About The City Varsity", bebas, "The City Varsity is an exhibition rugby match between Imperial College London and London School of Economics, held annually at the world-class facilities of Rosslyn Park RFC. It is a completely student-led initiative and aims to remain an event created by students, for students. It has proven to be a great success in previous years with hundreds of spectators attending to witness both men’s and women’s game and the trophies - JP Morgan Shield and the Rees Rawlings Cup – being awarded.", montserrat)}
      {TextRow([
        TextRowItem("Event History", montserrat, "Started in 2017 to support Matt Hampson foundation, the event proved most popular among the students of both Imperial and LSE, attracting almost 1000 spectators every year.", montserrat),
        TextRowItem("Matt Hampson Foundation", montserrat, "Matt has started his foundation in 2011 to help people suffering from serious sport injuries. All our profits go to Matt Hampson foundation.", montserrat, "Find Out More", bebas)])}

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

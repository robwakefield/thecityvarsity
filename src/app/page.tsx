'use client'

// Fonts from Google Fonts
import { Archivo_Black, Montserrat } from 'next/font/google'

// Import components to use here
import Header from '@/components/header'
import Title from '@/components/title'
import CenteredText from '@/components/text'
import { TextRow, TextRowItem } from '@/components/textRow'
import { Partners, PartnerItem, PartnerContact } from '@/components/partners'
import { Timeline, TimelineItem } from '@/components/timeline'

// If loading a variable font, you don't need to specify the font weight
const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className={"flex flex-col h-screen items-center justify-start"}>
      {/* Add items from components/ folder to create page layout */}
      {Header("THE KINSCAPE CITY VARSITY VI", archivo)}

      {Title("THE BIGGEST RUGBY CLASH OF THE YEAR", 
              "11.03.23",
              "BUY TICKETS", 
              "https://fixr.co/event/the-city-varsity-vi-tickets-958196957", 
              archivo)}

      {CenteredText("About The City Varsity", archivo, 
                    "The City Varsity is an exhibition rugby match between Imperial College London and London School of Economics, held annually at the world-class facilities of Rosslyn Park RFC. It is a completely student-led initiative and aims to remain an event created by students, for students. It has proven to be a great success in previous years with hundreds of spectators attending to witness both men’s and women’s game and the trophies - JP Morgan Shield and the Rees Rawlings Cup – being awarded.", montserrat)}
      
      {TextRow([
        TextRowItem("Event History", montserrat, "Started in 2017 to support Matt Hampson foundation, the event proved most popular among the students of both Imperial and LSE, attracting almost 1000 spectators every year.", montserrat),
        TextRowItem("Matt Hampson Foundation", montserrat, "Matt has started his foundation in 2011 to help people suffering from serious sport injuries. All our profits go to Matt Hampson foundation.", montserrat, "Find Out More", archivo)])}

      {Partners("OUR PARTNERS", archivo, [
        PartnerItem(
          "Kinscape", montserrat, 
          "Kinscape, Your Private Social Network\nBuild Private Communities\nShare Life Experiences Safely\nCelebrate the Stories\n\nSign up and be one of the first to try it!", montserrat,
          "/thecityvarsity/partners/kinscape.webp", 
          "Learn More", archivo, "https://www.google.co.uk"
        ),
        PartnerItem(
          "iNotary", montserrat, 
          "iNotary Public is a flexible and modern company, whose whole ethos is based around our clients.  We have seen that notarial practice in the UK is quite dated and does not suit today’s modern business environment. We work hard to ensure that not only are our client’s requirements met,  but that this is done with the minimum fuss and distraction to our clients.", montserrat,
          "/thecityvarsity/partners/iNotary.webp", 
          "Learn More", archivo, "https://www.google.co.uk"
        ),
        PartnerItem(
          "CORE POWER", montserrat, 
          "CORE POWER has rapidly emerged as the global frontrunner in the development  of new nuclear technologies for the maritime sector, partnering with leading international power, engineering and nuclear innovation  companies to deliver durable zero-emission energy for floating industrial production and deep-sea shipping.", montserrat,
          "/thecityvarsity/partners/core_power.webp", 
          "Learn More", archivo, "https://www.google.co.uk"
        )],
        PartnerContact(
          "Interested in becoming a sponsor of TCV VI?", montserrat,
          "Contact Us", archivo, "link")
      )}

      {Timeline("Schedule of Events", archivo, [
        TimelineItem(
          "Gates Open",
          "Come early to save yourself a seat at the stands and watch our teams warm up as you enjoy a selection of delicious takeaway food on site",
          "4.30pm",
          "Rosslyn Park",
          montserrat,
          "11/03/2023"),
        TimelineItem(
          "Women's Match",
          "Support your team as the women from Imperial and LSE clash on the grass of Rosslyn Park",
          "5pm - 6.30pm",
          "Rosslyn Park",
          montserrat),
        TimelineItem(
          "Men's Match",
          "See who comes out on top in this year's edition of the biggest rivalry among London's unis.",
          "7pm - 9pm",
          "Rosslyn Park",
          montserrat),
        TimelineItem(
          "Award Ceremony",
          "The crowning of the winners and the post-game meals",
          "9.15pm",
          "Rosslyn Park",
          montserrat),
        TimelineItem(
          "Afterparty",
          "Celebrate with the players at Tiger Tiger! - our coaches will take you directly from Rosslyn to the club",
          "10pm - Late",
          "Tiger Tiger London",
          montserrat)
      ])}

    </main>
  )
}

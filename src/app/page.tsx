'use client'

// Import components to use here
import Header from '@/components/header'
import Title from '@/components/title'
import CenteredText from '@/components/text'
import { TextRow, TextRowItem } from '@/components/textRow'
import { Partners, PartnerItem, PartnerContact } from '@/components/partners'
import { Timeline, TimelineItem } from '@/components/timeline'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import Footer from '@/components/footer'
import { Map } from '@/components/map'

export default function Home() {
  return (
    <main className={"flex flex-col h-screen items-center justify-start"}>
      {/* Add items from components/ folder to create page layout */}
      {Header("THE KINSCAPE CITY VARSITY VI")}

      {Title("THE BIGGEST RUGBY CLASH OF THE YEAR", 
              "11.03.23",
              "BUY TICKETS", 
              "https://fixr.co/event/the-city-varsity-vi-tickets-958196957"
            )}

      {CenteredText("About The City Varsity", 
                    "The City Varsity is an exhibition rugby match between Imperial College London and London School of Economics, held annually at the world-class facilities of Rosslyn Park RFC. It is a completely student-led initiative and aims to remain an event created by students, for students. It has proven to be a great success in previous years with hundreds of spectators attending to witness both men’s and women’s game and the trophies - JP Morgan Shield and the Rees Rawlings Cup – being awarded."
                    )}
      
      {TextRow([
        TextRowItem(
          "Event History",
          "Started in 2017 to support Matt Hampson foundation, the event proved most popular among the students of both Imperial and LSE, attracting almost 1000 spectators every year."
        ),
        TextRowItem(
          "Matt Hampson Foundation",
          "Matt has started his foundation in 2011 to help people suffering from serious sport injuries. All our profits go to Matt Hampson foundation.",
          "Find Out More"
        )])}

      {Partners("OUR PARTNERS", [
        PartnerItem(
          "Kinscape", 
          "Kinscape, Your Private Social Network\nBuild Private Communities\nShare Life Experiences Safely\nCelebrate the Stories\n\nSign up and be one of the first to try it!",
          "/thecityvarsity/partners/kinscape.webp", 
          "Learn More", "https://www.google.co.uk"
        ),
        PartnerItem(
          "iNotary", 
          "iNotary Public is a flexible and modern company, whose whole ethos is based around our clients.  We have seen that notarial practice in the UK is quite dated and does not suit today’s modern business environment. We work hard to ensure that not only are our client’s requirements met,  but that this is done with the minimum fuss and distraction to our clients.",
          "/thecityvarsity/partners/iNotary.webp", 
          "Learn More", "https://www.google.co.uk", true
        ),
        PartnerItem(
          "CORE POWER", 
          "CORE POWER has rapidly emerged as the global frontrunner in the development  of new nuclear technologies for the maritime sector, partnering with leading international power, engineering and nuclear innovation  companies to deliver durable zero-emission energy for floating industrial production and deep-sea shipping.",
          "/thecityvarsity/partners/core_power.webp", 
          "Learn More", "https://www.google.co.uk"
        )],
        PartnerContact(
          "Interested in becoming a sponsor of TCV VI?",
          "Contact Us", "link")
      )}

      {Timeline("Schedule of Events", [
        TimelineItem(
          "Gates Open",
          "Come early to save yourself a seat at the stands and watch our teams warm up as you enjoy a selection of delicious takeaway food on site",
          "4.30pm",
          "Rosslyn Park",
          "11/03/2023"
        ),
        TimelineItem(
          "Women's Match",
          "Support your team as the women from Imperial and LSE clash on the grass of Rosslyn Park",
          "5pm - 6.30pm",
          "Rosslyn Park"
        ),
        TimelineItem(
          "Men's Match",
          "See who comes out on top in this year's edition of the biggest rivalry among London's unis.",
          "7pm - 9pm",
          "Rosslyn Park",
        ),
        TimelineItem(
          "Award Ceremony",
          "The crowning of the winners and the post-game meals",
          "9.15pm",
          "Rosslyn Park",
        ),
        TimelineItem(
          "Afterparty",
          "Celebrate with the players at Tiger Tiger! - our coaches will take you directly from Rosslyn to the club",
          "10pm - Late",
          "Tiger Tiger London",
          )
      ])}

      {Gallery([
        "/gallery/pic1.webp",
        "/gallery/pic2.webp",
        "/gallery/pic3.webp"
      ])}

      {Contact(
        "Do you have questions or comments about the event? Do you need special accommodations? Send us a message, and we will get back to you as soon as we can.",
        "Rosslyn Park Rugby Club, London, England SW15 5LB, United Kingdom"
      )}

      {
        Map(51.4647, -0.2461)
      }

      {Footer("The City Varsity VI")}

    </main>
  )
}

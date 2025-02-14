/*
  IMPORTANT DATA TO UPDATE ANNUALLY
*/

export const EDITION = "VIII"
export const TITLE = "The Fennex City Varsity " + EDITION
export const MATCH_DATE = "08/03/25"
export const TICKET_LINK = "https://fatso.ma/1jv1"
export const PROGRAMME_LINK = ""

export const CONTACT_EMAIL = "rugby@ic.ac.uk"

export const AFTERPARTY_LOCATION = "" // "Tiger Tiger London"
export const AFTERPARTY_TEXT = "" // "Celebrate with the players at Tiger Tiger! - our coaches will take you directly from Rosslyn to the club"

// Note: If location changes, the about text in app/page.tsx should also be changed as it mentions Rosslyn Park
export const LOCATION = {
  name: "Rosslyn Park",
  address: "Rosslyn Park Rugby Club, London, England SW15 5LB, United Kingdom",
  latlon: [51.4647, -0.2461]
}

// Note: The partners images must be saved in both public/partners and public/thecityvarsity/partners. Simlarly for gallery images.
export const PARTNERS = [
    {
        name: "Fennex", 
        description: "",
        image: "/thecityvarsity/partners/fennex.png",
        buttonText: "Learn More",
        buttonLink: "https://fennex.net/",
        imageScale: 0.75
    },
    {
        name: "Kinscape", 
        description: "Kinscape, Your Private Social Network\nBuild Private Communities\nShare Life Experiences Safely\nCelebrate the Stories\n\nSign up and be one of the first to try it!",
        image: "/thecityvarsity/partners/kinscape.webp", 
        buttonText: "Learn More",
        buttonLink: "https://www.kinscape.com/",
        imageScale: 1
    },
  /*
  {
    name: "64 Investments", 
    description: "64 Investments is a real estate corporate finance and wealth management firm. 64 Investments has been trading as a Swiss private foundation since 2008 and was incorporated in London in 2016. Having led over Euro 4 billion of transactions, the 64 Investments team uses its strong network of relationships built over 20 years to provide bespoke, highly specialist services to its clients and partners.",
    image: "/thecityvarsity/partners/64_Investments.png", 
    buttonText: "Learn More",
    buttonLink: "https://64invest.com/"
  }
  {
    name: "CORE POWER", 
    description: "CORE POWER has rapidly emerged as the global frontrunner in the development  of new nuclear technologies for the maritime sector, partnering with leading international power, engineering and nuclear innovation  companies to deliver durable zero-emission energy for floating industrial production and deep-sea shipping.",
    image: "/thecityvarsity/partners/core_power.webp", 
    buttonText: "Learn More",
    buttonLink: "https://corepower.energy/"
  }
  */
]

/*
  To update the Schedule of Events or Gallery images, edit app/page.tsx
*/

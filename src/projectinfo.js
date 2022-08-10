import ufo from "./images/ufo.png";
import paintbrush from "./images/paintbrush.jpg";
import kw from "./images/kw.jpg";
import vl from "./images/vl.jpg";
import blockchain from "./images/blockchain.jpg";
import basic from "./images/basic.jpg";
import vp from "./images/vp.png";
import dinos from "./images/dinos.jpg";
import etg11 from "./images/slider/etg11.png";
import etg12 from "./images/slider/etg12.png";
import etg13 from "./images/slider/etg13.png";
import etg14 from "./images/slider/etg14.jpg";
import etg15 from "./images/slider/etg15.jpg";
import etg16 from "./images/slider/etg16.png";
import ca1 from "./images/slider/ca1.jpg";
import ca2 from "./images/slider/ca2.jpg";
import ca3 from "./images/slider/ca3.jpg";
import ca4 from "./images/slider/ca4.jpg";
import ca5 from "./images/slider/ca5.jpg";
import kw1 from "./images/slider/kw1.jpg";
import kw2 from "./images/slider/kw2.jpg";
import kw3 from "./images/slider/kw3.jpg";
import kw4 from "./images/slider/kw4.jpg";
import kw5 from "./images/slider/kw5.jpg";
import etm1 from "./images/slider/etm1.jpg";
import etm2 from "./images/slider/etm2.jpg";
import etm3 from "./images/slider/etm3.jpg";
import ac1 from "./images/slider/ac1.jpg";
import bb1 from "./images/slider/bb1.jpg";
import bb2 from "./images/slider/bb2.jpg";
import vp1 from "./images/slider/vp1.jpg";
import vp2 from "./images/slider/vp2.jpg";
import vl1 from "./images/slider/vl1.jpg";
import vl2 from "./images/slider/vl2.jpg";
import vl3 from "./images/slider/vl3.jpg";

export const projectinfo = [
  {
    src: ufo,
    slider: [etg11, etg12, etg13, etg14, etg15, etg16],
    link: "https://enterthegateway.netlify.app/",
    gh: "https://github.com/brunokalthoff/etg-1",
    h: "ETG#1: Enter The Gateway",
    pShort: "Virtual art exhibition",
    pLong: <>This virtual art exhibition was online for 28 days in February 2021. It shows some of my then-recent artworks and those of 18 artists and friends, most of which I met during my journey being a digital nomad in the Philippines in 2020.<br /><br />While the pandemic kept the world on hold, I was fortunate enough to feel greatly inspired by living on the small pacific island Siargao for a year. Certainly, the inspiration arose from the uncertainty inherent to the special time the world was experiencing, the beauty and rawness of the island, and the simple island life - ultimately amplified by my vivid, intimate social surroundings. ETG#1 was born from this inspiration.<br /><br />The exhibit was to share some of it, to give my very talented friends a humble platform for presenting their artworks. And, nonetheless, to celebrate the beauty of life! Also, this exhibition was thought to be the first of many more to come, one every year. Watch out for the next one!</>,
    code: ["Vanilla CSS", "React.js"],
    design: ["Photoshop", "MS Paint ;)"],
  },
  {
    src: dinos,
    slider: [etm1, etm2, etm3],
    link: "link",
    gh: "link",
    h: "ETG#2: Remember the Mesozoics?",
    pShort: "Virtual art exhibition",
    pLong: "The second exhibition within the regular ETG series. Going online in September 2022!",
    code: ["Tailwind CSS", "Framer Motion", "React.js", "Express.js", "MongoDB", "Authorization", "Authentication ", "Encryption & Hashing"],
    design: ["Figma", "Inkscape"],
  },
  {
    src: paintbrush,
    slider: [ca1, ca2, ca3, ca4, ca5],
    link: "https://feedbackpostcards.netlify.app/",
    gh: "https://github.com/brunokalthoff/JS-Art-RootBrush",
    h: "RudeBrush",
    pShort: "Creative digital drawing app",
    pLong: <>This web app lets you create digital artworks with a somewhat funky styled paintbrush. On strokes, the brush draws by animating root growth, randomizing the direction, length and curvature of each root. You may adjust the density, curvature, length, and color of the roots, as well as the canvas' background color. Check it out and get creative!<br /><br />At this stage, the app is written as a tool to leave feedback to a website - likely it will be integrated into the next ETG-series of online exhibitions. Another idea is to integrate it into an upcoming app called 'Letter to Self' that enables you to write a postcard to yourself and receive it by post at any chosen time in the future.<br /><br />For showcasing, I have attached it to the (now officially offline) ETG#1. It allows you to use the animated brush to draw on a square canvas. You may then hit save, add some text and upload your card to a public dashboard where it's viewed by the other visitors.</>,
    code: ["Vanilla CSS", "Vanilla JavaScript", "Express.js", "MongoDB"],
    design: ["-"],
  },
  {
    src: blockchain,
    slider: [ac1],
    link: "link",
    gh: "https://github.com/brunokalthoff/artcoin-blockchain.git",
    h: "ArtCoin",
    pShort: "Blockchain generating algorithmic artworks",
    pLong: "This blockchain running a coin also hosts several algorithms for making generative artworks. Each newly mined block feeds an algorithm that was chosen by the miner with transaction data and from it creates a unique artwork. They are then added to an open, constantly growing digital exhibition, and pushed to twitter",
    code: ["Vanilla JS", "React.js", "Tailwind CSS", "Express in Node.js", "Firebase", "Authorization", "Authentication ", "Cryptography"],
    design: ["-"],
  },
  {
    src: vl,
    slider: [vl1, vl2, vl3],
    link: "https://vlahomelistings.netlify.app",
    gh: "https://github.com/brunokalthoff/vlchomelistings",
    h: "Van Leeuwen",
    pShort: "Website design & development for canadian real estate advisory",
    pLong: "I structured, designed and built the new website for the canadian company Van Leeuwen Real Estate Advisors",
    code: ["Vanilla CSS", "Next.js", "SSR", "Framer Motion"],
    design: ["Figma, Inkscape"],
  },
  {
    src: kw,
    slider: [kw1, kw2, kw3, kw4, kw5],
    link: "https://kellerwilliams.netlify.app",
    gh: "https://github.com/brunokalthoff/kellerwilliams",
    h: "Keller Williams",
    pShort: "Website development for canadian consultancy franchise",
    pLong: "The leading Canadian Real Estate Consultancy Keller Williams has opened a new franchise: The Milton Market Center. Here's their website.",
    code: ["Vanilla CSS", "React.js", "Framer Motion"],
    design: ["Design by Keller Williams"],
  },
  {
    src: basic,
    slider: [bb1, bb2],
    link: "https://basic-berlin.de/",
    gh: "link",
    h: "basic Berlin",
    pShort: "Website design & copywriting for german interior design company",
    pLong: "basic runs two very successful, trendy interior design stores in the heart of Berlin's Prenzlauer Berg. Online, they showcase some of their favorite furniture collections and describe their services through my design and copywriting.",
    code: ["-"],
    design: ["Figma", "Illustrator"],
  },
  {
    src: vp,
    slider: [vp1, vp2],
    link: "https://vertriebspuls.de/",
    gh: "link",
    h: "Vertriebspuls",
    pShort: "Website design & copywriting for german sales consultant",
    pLong: "Diego Machemer is a German sales consultant. For his website, I help him show off his consultancy by creating consistent design patterns and copywriting.",
    code: ["-"],
    design: ["Photoshop", "Illustrator"]
  },
];
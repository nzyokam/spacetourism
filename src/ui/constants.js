export const navLinks = [
  { path: "/", number: "00", label: "Home" },
  { path: "/Destination", number: "01", label: "Destination" },
  { path: "/Crew", number: "02", label: "Crew" },
  { path: "/Technology", number: "03", label: "Technology" },
];

export const destinations = {
  MOON: {
    image: "/image-moon.png",
    title: "MOON",
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: `AVG. DISTANCE`,
    number: `384,400 KM`,
    time: `EST. TRAVEL TIME`,
    acttime: `3 DAYS`,
  },
  EUROPA: {
    image: "/image-europa.png",
    title: "EUROPA",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: `AVG. DISTANCE`,
    number: `628 MIL. KM`,
    time: `EST. TRAVEL TIME`,
    acttime: `3 YEARS`,
  },
  MARS: {
    image: "/image-mars.png",
    title: "MARS",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: `AVG. DISTANCE`,
    number: `225 MIL. KM `,
    time: `EST. TRAVEL TIME`,
    acttime: `9 MONTHS`,
  },
  TITAN: {
    image: "/image-titan.png",
    title: "TITAN",
    description: ` The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: `AVG. DISTANCE`,
    number: `1.6 BIL. KM`,
    time: `EST. TRAVEL TIME`,
    acttime: `7 YEARS`,
  },
};

export const crew = {
  DOUG: {
    img: "/Crew Image - doug.svg",
    rank: `COMMANDER`,
    name: `DOUGLAS HURLEY`,
    description: `Douglas Gerald Hurley is an American engineer, former 
    Marine Corps pilot and former NASA astronaut. He launched into space for the 
third time as commander of Crew Dragon Demo-2.`,
  },
  MARK: {
    img: "/Crew Image - mark.svg",
    rank: `MISSION SPECIALIST`,
    name: `MARK SHUTTLEWORTH`,
    description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, 
    the company behind the Linux-based Ubuntu operating system. Shuttleworth 
    became the first South African to travel to space as a space tourist.`,
  },
  VICTOR: {
    img: "/Crew Image - victor.svg",
    rank: `PILOT`,
    name: `VICTOR GLOVER`,
    description: `Pilot on the first operational flight of the SpaceX 
    Crew Dragon to the International Space Station. Glover is a commander 
    in the U.S. Navy where he pilots an F/A-18.He was a crew member of 
    Expedition 64, and served as a station systems flight engineer. `,
  },
  ANSARI: {
    img: "/Crew Image - ansari.svg",
    rank: `FLIGHT ENGINEER`,
    name: `ANOUESHEH ANSARI`,
    description: `Anousheh Ansari is an Iranian American engineer and 
    co-founder of Prodea Systems. Ansari was the fourth self-funded space 
    tourist, the first self-funded woman to fly to the ISS, and the first 
    Iranian in space. `,
  },
};

export const technologies = {
  LAUNCHVEHICLE:{
    title: `THE TERMINOLOGY...`,
    technology: `LAUNCH VEHICLE`,
    description:`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    img:`/Technology Image - A.svg`,
    imgtablet:`/tablet-img-tch.svg`,
    imgmobile:`/mobile-img-tech.svg`,
  },
  SPACEPORT:{
    title: `THE TERMINOLOGY...`,
    technology: `SPACEPORT`,
    description:`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    img:`/Technology Image - B.svg`,
    imgtablet:`/spaceport-tablet.svg`,
    imgmobile:`/spaceport-mobile.svg`,
  },
  SPACECAPSULE:{
    title: `THE TERMINOLOGY...`,
    technology: `SPACE CAPSULE`,
    description:`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    img:`/Technology image - C.svg`,
    imgtablet:`/spacecapsule-tablet.svg`,
    imgmobile:`/spacecapsule-mobile.svg`,
  },
}
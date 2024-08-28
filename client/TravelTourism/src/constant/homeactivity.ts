import { PiTent } from "react-icons/pi";
import { MdOutlineParagliding } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { GiBoatFishing } from "react-icons/gi";
import { GiHiking } from "react-icons/gi";
import activity1 from '../../public/Images/activity1.png';
import activity2 from '../../public/Images/activity2.png';
import activity3 from '../../public/Images/activity3.png';
import activity4 from '../../public/Images/activity4.png';
import activity5 from '../../public/Images/activity5.png';
import activity6 from '../../public/Images/activity6.png';

const HomeActivity = [
    {
        logo: PiTent,
        id: 1,
        title1: "Tent camping",
    },
    {
        logo: MdOutlineParagliding,
        id: 2,
        title1: "Paragliding Tours",
    },
    {
        logo: BiCycling,
        id: 3,
        title1: "Adventure travel",
    },
    {
        logo: TfiWorld,
        id: 4,
        title1: "Explore world",
    },
    {
        logo: GiBoatFishing,
        id: 5,
        title1: "Swimming & fishing",
    },
    {
        logo: GiHiking,
        id: 6,
        title1: "Hiking mountain",
    },
];

const ImageData = [
    {
        id: 1,
        title1: "Under the Stars: A Tent Camping Adventure",
        description: "Unplugged Escapes, Serene Nights, and Nature's Symphony",
        logo: activity1,
    },
    {
        id: 2,
        title1: "Soar Beyond Boundaries: Paragliding Adventures",
        description: "Experience the Thrill of Flight with Expert Guides",
        logo: activity2,
    },
    {
        id: 3,
        title1: "Beyond Borders: Thrilling Adventures Await",
        description: "Embark on Epic Journeys, Discover Untamed Landscapes, and Create Unforgettable Memories",
        logo: activity3,
    },
    {
        id: 4,
        title1: "Global Odyssey: Explore the World's Wonders",
        description: "Unveiling Hidden Gems, Embracing Cultural Riches, and Embracing Boundless Adventure",
        logo: activity4,
    },
    {
        id: 5,
        title1: "Aquatic Pursuits: The Harmony of Swimming and Fishing",
        description: "Dive into Tranquil Waters, Cast Your Line, and Reel in Memories",
        logo: activity5,
    },
    {
        id: 6,
        title1: "Summit Seekers: A Journey Through Mountain Majesty",
        description: "Ascending Peaks, Embracing Solitude, and Finding Serenity in the Heights",
        logo: activity6,
    },
]

export { HomeActivity, ImageData };

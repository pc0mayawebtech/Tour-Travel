import { IconType } from "react-icons";
import { FaLocationCrosshairs } from "react-icons/fa6";

export type User = {
    logo: IconType,
    id: number,
    counting: number,
    description: string,
    countSymbol?: string,
}
const HomeJourney: User[] = [
    {
        logo: FaLocationCrosshairs,
        id: 1,
        counting: 999,
        description: "Total Destination.",
        countSymbol: "+"
    },
    {
        logo: FaLocationCrosshairs,
        id: 2,
        counting: 599,
        description: "Campaigns Closed.",
        countSymbol: "+"
    },
    {
        logo: FaLocationCrosshairs,
        id: 3,
        counting: 399,
        description: "Our Volunteer.",
        countSymbol: "+"

    },
    {
        logo: FaLocationCrosshairs,
        id: 4,
        counting: 195,
        description: "Happy Traveler",
        countSymbol: "M"
    },
];

export default HomeJourney;

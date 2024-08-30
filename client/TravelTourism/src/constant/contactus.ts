import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const ContactStatus = [
    {
        id: 1,
        logo: MdOutlineWifiCalling3,
        title1: "Call Us On",
        title2: +997623456,
        title3: +9976233467,
        link1: "tel:997623456",
        link2: "tel:9976233467",
    },
    {
        id: 2,
        logo: MdOutlineMailOutline,
        title1: "Email Us",
        title2: "Support@agoda.com",
        title3: "Contact@agoda.com",
        link1: "mailto:Support@agoda.com",
        link2: "mailto:Contact@agoda.com",
    },
    {
        id: 3,
        logo: IoLocationOutline,
        title1: "Our Location",
        title2: "1426 Center StreetBend",
        title3: "97702, California, USA",
    },
];

export default ContactStatus;

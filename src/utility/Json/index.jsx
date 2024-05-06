import {
  // Import Flags From Images Folder
  America,
  Austria,
  Brazil,
  China,
  France,
  India,
  Germany,
  Australia,
  Portugal,
  European,
  Japan,
  Mauritius,
  Qatar,
  Scotland,
  Jamaica,
  SouthKorea,
  Hawaii,
  Vietnam,
  Singapore,
  Kenya,
} from "@/assets/images";
import { Icons } from "..";

// Style Sheets
export const flagIconImgData = [
  { imgSrc: India, imgAlt: "india-flag" },
  { imgSrc: America, imgAlt: "america-flag" },
  { imgSrc: Germany, imgAlt: "germany-flag" },
  { imgSrc: Brazil, imgAlt: "brazil-flag" },
  { imgSrc: China, imgAlt: "china-flag" },
  { imgSrc: Austria, imgAlt: "austria-flag" },
  { imgSrc: France, imgAlt: "france-flag" },
  { imgSrc: Australia, imgAlt: "australia-flag" },
  { imgSrc: Portugal, imgAlt: "portugal-flag" },
  { imgSrc: European, imgAlt: "european-flag" },
  { imgSrc: Japan, imgAlt: "japan-flag" },
  { imgSrc: Mauritius, imgAlt: "mauritius-flag" },
  { imgSrc: Qatar, imgAlt: "qatar-flag" },
  { imgSrc: Scotland, imgAlt: "scotland-flag" },
  { imgSrc: Jamaica, imgAlt: "jamaica-flag" },
  { imgSrc: SouthKorea, imgAlt: "south-korea-flag" },
  { imgSrc: Hawaii, imgAlt: "hawaii" },
  { imgSrc: Vietnam, imgAlt: "vietnam-flag" },
  { imgSrc: Singapore, imgAlt: "singapore-flag" },
  { imgSrc: Kenya, imgAlt: "kenya-flag" },
];

export const HQColorsWrapper = [
  {
    title: "Basic Colors",
    styleSheetsColors: [
      {
        name: "primary",
        color: "var(--primary)",
        code: "#E50025",
      },
      {
        name: "secondary",
        color: "var(--secondary)",
        code: "#CCC6BE",
      },
      {
        name: "tertiary",
        color: "var(--tertiary)",
        code: "#33BB47",
      },
      {
        name: "quaternary",
        color: "var(--quaternary)",
        code: "#F99600",
      },
      {
        name: "white",
        color: "var(--white)",
        code: "#ffffff",
      },
      {
        name: "black",
        color: "var(--black)",
        code: "#000000",
      },
      {
        name: "gray",
        color: "var(--gray)",
        code: "#666666",
      },
    ],
  },
  {
    title: "primary-shades",
    styleSheetsColors: [
      {
        name: "primary-shades-100",
        color: "var(--primary-shades-100)",
        code: "#D60023",
      },
      {
        name: "primary-shades-80",
        color: "var(--primary-shades-80)",
        code: "#E81335",
      },
      {
        name: "primary-shades-60",
        color: "var(--primary-shades-60)",
        code: "#ED3856",
      },
      {
        name: "primary-shades-40",
        color: "var(--primary-shades-40)",
        code: "#F47188",
      },
      {
        name: "primary-shades-20",
        color: "var(--primary-shades-20)",
        code: "#FCA9B9",
      },
    ],
  },
  {
    title: "quaternary-shades",
    styleSheetsColors: [
      {
        name: "quaternary-shades-80",
        color: "var(--quaternary-shades-80)",
        code: "#FAA21D",
      },
      {
        name: "quaternary-shades-60",
        color: "var(--quaternary-shades-60)",
        code: "#FBAE3B",
      },
      {
        name: "quaternary-shades-40",
        color: "var(--quaternary-shades-40)",
        code: "#FDC575",
      },
      {
        name: "quaternary-shades-20",
        color: "var(--quaternary-shades-20)",
        code: "#FED193",
      },
    ],
  },
  {
    title: "tertiary-shades",
    styleSheetsColors: [
      {
        name: "tertiary-shades-80",
        color: "var(--tertiary-shades-80)",
        code: "#33BB47",
      },
      {
        name: "tertiary-shades-60",
        color: "var(--tertiary-shades-60)",
        code: "#63D272",
      },
      {
        name: "tertiary-shades-40",
        color: "var(--tertiary-shades-40)",
        code: "#92E89E",
      },
      {
        name: "tertiary-shades-20",
        color: "var(--tertiary-shades-20)",
        code: "#C2FFC9",
      },
    ],
  },
  {
    title: "white-shades",
    styleSheetsColors: [
      {
        name: "white-shades-80",
        color: "var(--white-shades-80)",
        code: "#D9D9D9",
      },
      {
        name: "white-shades-60",
        color: "var(--white-shades-60)",
        code: "#C0C0C0",
      },
      {
        name: "white-shades-40",
        color: "var(--white-shades-40)",
        code: "#C8C8C8",
      },
      {
        name: "white-shades-20",
        color: "var(--white-shades-20)",
        code: "#D9D9D9",
      },
    ],
  },
  {
    title: "black-shades",
    styleSheetsColors: [
      {
        name: "black-shades-80",
        color: "var(--black-shades-80)",
        code: "#161616",
      },
      {
        name: "black-shades-60",
        color: "var(--black-shades-60)",
        code: "#2C2C2C",
      },
      {
        name: "black-shades-40",
        color: "var(--black-shades-40)",
        code: "#585858",
      },
      {
        name: "black-shades-20",
        color: "var(--black-shades-20)",
        code: "#848484",
      },
    ],
  },
  {
    title: "gray-shades",
    styleSheetsColors: [
      {
        name: "Gray-shades-80",
        color: "var(--gray-shades-80)",
        code: "#666666",
      },
      {
        name: "Gray-shades-60",
        color: "var(--gray-shades-60)",
        code: "#919191",
      },
      {
        name: "Gray-shades-40",
        color: "var(--gray-shades-40)",
        code: "#BBBBBB",
      },
      {
        name: "Gray-shades-20",
        color: "var(--gray-shades-20)",
        code: "#CCCCCC",
      },
    ],
  },
];

export const accordionItems = [
  {
    key: "1",
    label: "This is panel header 1",
    children: (
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    ),
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: (
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    ),
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: (
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    ),
  },
];

export const themeModeItems = [
  {
    name: "Dark",
    value: "Dark",
  },
  {
    name: "Light",
    value: "Light",
  },
];

// Drop Items
export const simpleDropDownItems = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        3rd menu item
      </a>
    ),
  },
];

export const userDropItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        profile
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
      </svg>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        inbox
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
      </svg>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        task manager
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 4H5V20H19V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H19.9997C20.5519 2 20.9996 2.44772 20.9997 3L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11.2929 13.1213L15.5355 8.87868L16.9497 10.2929L11.2929 15.9497L7.40381 12.0607L8.81802 10.6464L11.2929 13.1213Z"></path>
      </svg>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Settings
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path>
      </svg>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Support
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path>
      </svg>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Logout
      </a>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
      </svg>
    ),
  },
];

// Card Data Design
export const analyticsViewData = [
  {
    name: "Earnings",
    value: "$33,200",
    path: "/",
    pathname: "View All",
    bg: "purple",
    icon: Icons.clock,
  },
  {
    name: "Order ",
    value: "2080",
    path: "/",
    pathname: "View All",
    bg: "orange",
    icon: Icons.dataBase,
  },
  {
    name: "Team Members",
    value: "800",
    path: "/",
    pathname: "View All",
    bg: "skyblue",
    icon: Icons.team,
  },
  {
    name: "Profit",
    value: "$ 9825",
    path: "/",
    pathname: "View All",
    bg: "green",
    icon: Icons.dollar,
  },
  {
    name: "Projects",
    value: "5000",
    path: "/",
    pathname: "View All",
    bg: "pink",
    icon: Icons.dataBaseTwo,
  },
  {
    name: "Total Visitor",
    value: "208",
    path: "/",
    pathname: "View All",
    bg: "yellow",
    icon: Icons.group,
  },
];

export const analyticsProgressData = [
  {
    name: "Products Sold",
    totalItems: "14,865",
    percentage: 80,
  },
  {
    name: "Customers",
    totalItems: "22,456",
    percentage: 50,
  },
  {
    name: "Followers",
    totalItems: "54,412",
    percentage: 74,
  },
];

export const recordsData = [
  {
    name: "Total Revenue",
    description: "$236.18",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
    icon: Icons.revenue,
  },
  {
    name: "Total Orders",
    description: "11,220",
    backgroundColor: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
    icon: Icons.box,
  },
  {
    name: "Delivered",
    description: "15,550",
    backgroundColor: "rgba(36, 151, 130, 0.2)",
    color: "rgb(36, 151, 130)",
    icon: Icons.truck,
  },
  {
    name: "Cancelled",
    description: "4,266",
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    color: "rgb(239, 68, 68)",
    icon: Icons.box,
  },
  {
    name: "Sales",
    description: "2,365",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    color: "rgb(59, 130, 246)",
    icon: Icons.shoppingCart,
  },
  {
    name: "Total Visitor",
    description: "3,400",
    backgroundColor: "rgba(168, 85, 247, 0.2)",
    color: "rgb(168, 85, 247)",
    icon: Icons.team,
  },
];

// Aside StyleSheets Data
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

export const stylesheetsMenuItems = [
  getItem(
    "Ui Kits",
    "Ui Kits",
    Icons.calendar,
    [
      getItem("Typography", "/stylesheets/typography", Icons.typography),
      getItem("Basic Color", "/stylesheets/basic-color", Icons.palette),
      getItem("Buttons", "/stylesheets/button", Icons.calendar),
      getItem("Avatars", "/stylesheets/avatar", Icons.user),
      getItem("Progress Bar", "/stylesheets/progress-bar", Icons.progress),
      getItem("Modal", "/stylesheets/modal", Icons.calendar),
      getItem("Alert", "/stylesheets/alert", Icons.alert),
      getItem("Popover", "/stylesheets/popover", Icons.calendar),
      getItem("Tooltip", "/stylesheets/tooltip", Icons.calendar),
      getItem("Badge", "/stylesheets/badge", Icons.calendar),
      getItem("Accordion", "/stylesheets/accordion", Icons.calendar),
      getItem("Calendar", "/stylesheets/calendar", Icons.calendar),
      getItem("Dropzone", "/stylesheets/dropzone", Icons.calendar),
      getItem("Breadcrumb", "/stylesheets/breadcrumb", Icons.calendar),
      getItem("Pagination", "/stylesheets/pagination", Icons.calendar),
      getItem("Creative Card", "/stylesheets/creative-card", Icons.calendar),
      getItem("OffCanvas", "/stylesheets/offcanvas", Icons.calendar),
      getItem("Toast", "/stylesheets/toast", Icons.calendar),
      getItem("Form", "From-group", Icons.form, [
        getItem("Input", "/stylesheets/input", null),
        getItem("Rating", "/stylesheets/rating", null),
        getItem("Radio & Checkbox", "/stylesheets/radio-checkbox", null),
        getItem("Switch", "/stylesheets/switch", null),
        getItem("Text-Editor", "/stylesheets/text-editor", null),
        getItem("Date Picker", "/stylesheets/date-picker", null),
        getItem("Dropdown", "/stylesheets/dropdown", null),
        getItem("Select", "/stylesheets/select", null),
        getItem("Counter", "/stylesheets/counter", null),
        getItem("Clip Board", "/stylesheets/clip-board", null),
        getItem("Range slider", "/stylesheets/range-slider", null),
      ]),
      {
        type: "divider",
      },
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Icons",
    "Icons-group",
    null,
    [
      getItem("General Icons", "/stylesheets/general-icons", Icons.vector),
      getItem("Flag Icons", "/stylesheets/flag-icons", Icons.flag),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Map",
    "Map-group",
    Icons.calendar,
    [getItem("Google Map", "/stylesheets/google-map", Icons.map)],
    "group"
  ),
  {
    type: "divider",
  },
];

// Aside Admin Data
export const AdminMenuItems = [
  getItem(
    "Admin",
    "Ui Kits",
    Icons.calendar,
    [getItem("Dashboard", "/admin", Icons.calendar)],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Doctor",
    "Doctor-group",
    Icons.calendar,
    [
      getItem("Doctor List", "/admin/doctor-list", Icons.calendar),
      getItem("Add Doctor", "/admin/add-doctor", Icons.calendar),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Patients",
    "Patients-group",
    Icons.calendar,
    [
      getItem("Patients  List", "/admin/patients-list", Icons.calendar),
      getItem("Add Patients ", "/admin/add-patients", Icons.calendar),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Staff",
    "Staff-group",
    Icons.calendar,
    [
      getItem("Staff List", "/admin/staff-list", Icons.calendar),
      getItem("Add Staff", "/admin/add-staff", Icons.calendar),
      getItem("Leaves", "/admin/add-staff", Icons.calendar),
      getItem("Holidays", "/admin/holidays", Icons.calendar),
      getItem("Attendance Sheet", "/admin/attendance-sheet", Icons.calendar),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Doctor Schedule",
    "Doctor-Schedule-group",
    Icons.calendar,
    [
      getItem("Doctor Schedule", "/admin/doctor-schedule", Icons.calendar),
      getItem("Add Schedule", "/admin/add-schedule", Icons.calendar),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Appointment",
    "Appointment-group",
    Icons.calendar,
    [getItem("Appointment List", "/admin/appointment-list", Icons.calendar)],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Department",
    "Department-group",
    Icons.calendar,
    [
      getItem("Department List", "/admin/department-list", Icons.calendar),
      getItem("Add Department", "/admin/add-department", Icons.calendar),
    ],
    "group"
  ),
  getItem(
    "Billing",
    "Billing-group",
    Icons.calendar,
    [
      getItem("Employee Salary", "/admin/employee-salary", Icons.calendar),
      getItem("Invoice", "Invoice-group", Icons.calendar, [
        getItem("Invoice List", "/admin/invoice-list", Icons.calendar),
        getItem("Add Invoice", "/admin/add-invoice", Icons.calendar),
      ]),
    ],
    "group"
  ),
  {
    type: "divider",
  },
  getItem(
    "Blog",
    "Blog-group",
    Icons.calendar,
    [getItem("Blog Add", "/admin/blog-add", Icons.calendar)],
    "group"
  ),
  {
    type: "divider",
  },
];

export const gender = [
  {
    value: "male",
    label: "male",
  },
  {
    value: "female",
    label: "female",
  },
  {
    value: "other",
    label: "other",
  },
];

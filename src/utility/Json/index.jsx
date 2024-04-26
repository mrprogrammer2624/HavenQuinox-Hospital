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
        {" "}
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
        {" "}
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
        {" "}
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
      getItem("Form", "From-group", Icons.form, [
        getItem("Input", "/stylesheets/input", null),
        getItem("Rating", "/stylesheets/rating", null),
        getItem("Radio & Checkbox", "/stylesheets/radio-checkbox", null),
        getItem("Switch", "/stylesheets/switch", null),
        getItem("Text-Editor", "/stylesheets/text-editor", null),
        getItem("Date Picker", "/stylesheets/date-picker", null),
        getItem("Counter", "/stylesheets/counter", null),
        getItem("Clip Board", "/stylesheets/clip-board", null),
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

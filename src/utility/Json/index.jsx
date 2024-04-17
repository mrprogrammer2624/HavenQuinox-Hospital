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

//  Aside Data
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
    "Ui-group",
    null,
    [
      getItem("Typography", "/stylesheets/typography", null),
      getItem("Basic Color", "/stylesheets/basic-color", null),
      getItem("Buttons", "/stylesheets/button", null),
      getItem("Avatars", "/stylesheets/avatars"),
      getItem("Progress Bar", "/stylesheets/progress"),
      getItem("Modal", "/stylesheets/modal", null),
      getItem("Alert", "/stylesheets/alert"),
      getItem("Popover", "/stylesheets/Popover"),
      getItem("Tooltip", "/stylesheets/tooltip"),
      getItem("Badge", "/stylesheets/badge"),
      getItem("Calendar", "/stylesheets/calendar"),
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
      getItem("General icons", "/stylesheets/general-icons", null),
      getItem("FlagIcons", "/stylesheets/flag-icons", null),
    ],
    "group"
  ),
];

export const AdminMenuItems = [
  getItem(
    "PAGES",
    "pages-group",
    null,
    [
      getItem(
        "Authentication",
        "authentication-pages",
        <i className="ri-fingerprint-2-fill"></i>,
        [
          getItem("Login", "/authentication/login"),
          getItem("Register", "/authentication/register"),
          getItem("Verify Email", "/authentication/verify-email"),
          getItem("Forgot Password", "/authentication/forgot-password"),
          getItem("Forgot Email", "/authentication/forgot-email"),
          getItem("OTP Verification", "/authentication/otp"),
        ]
      ),
      getItem(
        "Error Page",
        "/dashboard/error",
        <i className="ri-error-warning-fill"></i>
      ),
      getItem(
        "Coming Soon",
        "/dashboard/coming-soon",
        <i className="ri-megaphone-fill"></i>
      ),
      getItem(
        "Not Found",
        "/dashboard/not-found",
        <i className="ri-forbid-fill"></i>
      ),
      getItem(
        "Under Maintenance",
        "/dashboard/under-maintenance",
        <i className="ri-hammer-fill"></i>
      ),
    ],
    "group"
  ),
  {
    type: "divider",
  },
];

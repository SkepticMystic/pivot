import DelveLogo from "$lib/assets/Delve Logo.png";
import DripcelDroplet from "$lib/assets/Dripcel Circle.png";
import CashloansLogo from "$lib/assets/cashloans-logo.webp";
import IqpaidLogo from "$lib/assets/iqpaid-logo.webp";
import LuciaLogo from "$lib/assets/lucia-logo.svg";

export const PROJECTS: {
  title: string;
  type: string;
  openSource: boolean;
  href: string;
  desc: string;
  imgStr?: string;
  imgSrc?: string;
  imgCls?: string;
}[] = [
  {
    title: "Dripcel",
    type: "Automated SMS Marketing",
    openSource: false,
    href: "https://www.dripcel.com",
    imgSrc: DripcelDroplet,
    desc:
      "Built from scratch, leverging AI-generated insights, and current industry standards. Dripcel is a powerful tool for any business looking to grow their customer base.",
  },
  {
    title: "Big Data Migration",
    type: "Database Architecture",
    openSource: false,
    desc:
      "A large-scale data migration project, involving the flow of millions of records between multiple databases. The transition was seamless, allowing stakeholders to leverage the new system immediately.",
    href: "https://www.delve.systems",
    imgSrc: DelveLogo,
    imgCls: "w-32 sm:pt-0 pt-6",
  },
  {
    title: "iQPaid Connect",
    type: "Market Research Platform",
    openSource: false,
    desc:
      "A groundbreaking platform that allows users to instantly get rewarded for the data they choose to share with brands. A central focus was on mobile-first design, and a seamless user experience.",
    href: "https://connect.iqpaid.com",
    imgSrc: IqpaidLogo,
    imgCls: "w-36",
  },
  {
    title: "Cashloans",
    type: "Loan Comparison Tool",
    openSource: false,
    desc:
      "Instantly apply for a loan with more than 6 South African lenders, and immediately see details of any offers you're accepted for. Create a profile to quickly reapply in future. ",
    href: "https://cashloans.vercel.app",
    imgSrc: CashloansLogo,
    imgCls: "w-40 sm:pt-0 pt-6",
  },
  {
    title: "Lucia",
    type: "Auth Library",
    openSource: true,
    desc:
      "Lucia is an auth library for TypeScript that abstracts away the complexity of handling users and sessions. Contributions focus on the MongoDB adapter, and documentation.",
    href: "https://lucia-auth.com",
    imgSrc: LuciaLogo,
    imgCls: "w-24",
  },
  {
    title: "Breadcrumbs",
    type: "Obsidian Plugin",
    openSource: true,
    desc:
      "A powerful way to create structure out of Markdown notes in Obsidian. Breadcrumbs allows you to create a network of notes, and navigate between them with ease.",
    href: "https://breadcrumbs-wiki.onrender.com/docs/Home",
    imgStr: "🥖",
    imgCls: "w-24 text-8xl",
  },
];
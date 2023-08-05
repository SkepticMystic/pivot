import DelveLogo from "$lib/assets/Delve Logo.png";
import DripcelDroplet from "$lib/assets/Dripcel Circle.png";
import CashloansLogo from "$lib/assets/cashloans-logo.webp";
import IqpaidLogo from "$lib/assets/iqpaid-logo.webp";
import LuciaLogo from "$lib/assets/lucia-logo.svg";

export const PROJECTS: {
  title: string;
  slug: string;
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
    slug: "dripcel",
    type: "Automated SMS Marketing",
    openSource: false,
    href: "https://www.dripcel.com",
    imgSrc: DripcelDroplet,
    desc:
      'Built from scratch, leveraging AI-generated insights, and current industry standards. Dripcel is used by South African <span class="text-primary">business leaders</span> to send millions of messages to their customers every week, keeping them in the loop.',
  },
  {
    title: "Big Data Migration",
    slug: "delve-data-migration",
    type: "Database Architecture",
    openSource: false,
    desc:
      'A large-scale data migration project, involving the flow of millions of records between multiple databases. The transition was <span class="text-primary">seamless</span>, allowing stakeholders to leverage the new system immediately.',
    href: "https://www.delve.systems",
    imgSrc: DelveLogo,
    imgCls: "w-32 sm:pt-0 pt-6",
  },
  {
    title: "iQPaid Connect",
    slug: "iqpaid-connect",
    type: "Market Research Platform",
    openSource: false,
    desc:
      'A groundbreaking platform that allows users to instantly get rewarded for the data they choose to share. A central focus was on <span class="text-primary">mobile-first</span> design, and a seamless user experience.',
    href: "https://connect.iqpaid.com",
    imgSrc: IqpaidLogo,
    imgCls: "w-36",
  },
  {
    title: "Cashloans",
    slug: "cashloans",
    type: "Loan Comparison Tool",
    openSource: false,
    desc:
      'Integrated with more than 6 South African lenders, allowing users to <span class="text-primary">immediately</span> see which offers they\'re eligible for. Used by tens-of-thousands of South Africans every month.',
    href: "https://cashloans.vercel.app",
    imgSrc: CashloansLogo,
    imgCls: "w-40 sm:pt-0 pt-6",
  },
  {
    title: "Lucia",
    slug: "lucia",
    type: "Auth Library",
    openSource: true,
    desc:
      "Lucia is an auth library for TypeScript that abstracts away the complexity of handling users and sessions. Contributions focus on the <span class='text-primary'>MongoDB</span> adapter.",
    href: "https://lucia-auth.com",
    imgSrc: LuciaLogo,
    imgCls: "w-24",
  },
  {
    title: "Breadcrumbs",
    slug: "breadcrumbs",
    type: "Obsidian Plugin",
    openSource: true,
    desc:
      "A powerful way to create structure out of Markdown notes in Obsidian. Breadcrumbs allows you to create a <span class='text-primary'>network</span> of notes, and navigate between them with ease.",
    href: "https://breadcrumbs-wiki.onrender.com/docs/Home",
    imgStr: "🥖",
    imgCls: "max-w-24 text-7xl text-center",
  },
];

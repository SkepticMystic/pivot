import Cog6Tooth from "$lib/components/icons/Cog6Tooth.svelte";
import ChartBar from "$lib/components/icons/chartBar.svelte";
import Sparkles from "$lib/components/icons/sparkles.svelte";
import type { ComponentType } from "svelte";

export const SERVICES_METADATA: {
  title: string;
  slug: string;
  desc: string;
  icon: ComponentType;
}[] = [
  {
    title: "Bespoke Web Apps",
    slug: "bespoke-web-apps",
    desc: "Client-focused, customer-centric.",
    icon: Sparkles,
  },
  {
    title: "Process Automation",
    slug: "process-automation",
    desc: "Save time and money by removing repetitive tasks.",
    icon: Cog6Tooth,
  },
  {
    title: "Data Analysis",
    slug: "data-analysis",
    desc: "Make informed decisions with data-driven insights.",
    icon: ChartBar,
  },
];

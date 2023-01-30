import type { ComponentType } from "svelte";

export interface DeveloperProfile {
    name: string;
    imgSrc: string;
    desc: string;
    links: { href: string; icon?: ComponentType, imgSrc?: string }[];
}

export interface PorfolioItem {
    title?: string;
    href: string;
    imgSrc: string;
    description: string;
}
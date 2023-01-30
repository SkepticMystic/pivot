import type { DeveloperProfile, PorfolioItem } from "$lib/interfaces";

export const DEVELOPER_PROFILES: DeveloperProfile[] = [
    {
        name: 'Ross Keenan',
        imgSrc: 'Ross @ Lexis.jpg',
        desc: 'Full Stack Developer',
        links: [
            {
                href: 'https://www.linkedin.com/in/ross-keenan-b4429b12b/',
                // icon: LinkedinIcon,
            },
            {
                href: 'https://github.com/SkepticMystic',
                // icon: GithubIcon,
            }
        ]
    },
    {
        name: 'Tyrone Dunn',
        imgSrc: '',
        desc: 'Full Stack Developer',
        links: [
            {
                href: 'https://www.linkedin.com/in/ross-keenan-b4429b12b/',
                // icon: LinkedinIcon,
            },
            {
                href: 'https://github.com/SkepticMystic',
                // icon: GithubIcon,
            }
        ]
    }
];

export const PORTFOLIO_ITEMS: PorfolioItem[] = [
    {
        href: 'https://www.dripcel.com',
        imgSrc: 'dripcel logo.png',
        description: 'Automated SMS drip marketing platform'
    },
    {
        title: 'Sugar',
        href: 'https://www.behance.net/gallery/160950567/Social-Networking-App',
        imgSrc: 'sugar.png',
        description: 'Social media app. Elegant, user-friendly mobile app design'
    }
];
"use strict";

// Would make more sense in the future to move this information into a JSON
// file that is downloaded by the web-page rather than inlining it within the
// code like this.
module.exports = {
    carouselItems: [
        {
            id: 'engineer',
            title: 'I\'m nfactorial',
            small: 'Software Engineer',
            content: 'Agile, DevOps, Telemetry'
        },
        {
            id: 'developer',
            title: 'I\'m n!',
            small: 'Video Game Developer',
            content: 'C++, C#, Java, JavaScript, Python'
        },
        {
            id: 'nfactorial',
            title: 'I\'m nfactorial',
            small: 'System Designer',
            content: 'Video Games, Tools, Networking, Rendering'
        },
        {
            id: 'n!',
            title: 'I\'m n!',
            small: 'Programmer',
            content: 'Threading, Performance, Cloud'
        }
    ],
    navbar: {
        brandText: 'nfactorials homepage',
        items: [
            {
                id: 'home',
                href: '#home',
                title: 'Home'
            },
            {
                id: 'profile',
                href: '#profile',
                title: 'Profile'
            },
            {
                id: 'portfolio',
                href: '#portfolio',
                title: 'Portfolio'
            },
            {
                id: 'contact',
                href: '#contact',
                title: 'Contact'
            }
        ]
    },
    articleSections: [
        {
            id: 'webgl-games',
            title: 'WebGL Games',
            description: 'Example games for fun.',
            items: [
                {
                    title: 'Game 1',
                    image: 'images/heli.jpg',
                    description: 'Fly a helicopter around and shoot stuff!'
                },
                {
                    title: 'Game 2',
                    image: 'images/heli.jpg',
                    description: 'Fly a helicopter around and shoot stuff!'
                },
                {
                    title: 'Game 3',
                    image: 'images/heli.jpg',
                    description: 'Fly a helicopter around and shoot stuff!'
                },
                {
                    title: 'Game 4',
                    image: 'images/heli.jpg',
                    description: 'Fly a helicopter around and shoot stuff!'
                }
            ]
        },
        {
            id: 'articles',
            title: 'Articles',
            description: 'Articles for you to read.',
            items: [
                {
                    title: 'Article 1',
                    image: 'images/heli.jpg',
                    description: ''
                },
                {
                    title: 'Article 2',
                    image: 'images/heli.jpg',
                    description: ''
                },
                {
                    title: 'Article 3',
                    image: 'images/heli.jpg',
                    description: ''
                }
            ]
        }
    ],
    footer: {
        columns: [
            {
                title: 'Social',
                items: [
                    {
                        id: 'Twitter',
                        link: 'https://twitter.com/nfactorial_wc'
                    }
                ]
            },
            {
                title: 'Platforms',
                items: [
                    {
                        id: 'Twitter',
                        link: 'https://twitter.com/nfactorial_wc'
                    }
                ]
            },
            {
                title: 'Contact',
                items: [
                    {
                        id: 'Twitter',
                        link: 'https://twitter.com/nfactorial_wc'
                    }
                ]
            }
        ]
    }
};

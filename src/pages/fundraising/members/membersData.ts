import {IMAGES_BUCKET} from "../../../lib/consts.ts";

export type MemberData = {
    username: string
    icon: string
    name: string
    pronouns: string
    socials?: SocialData[]
    streaming?: boolean
    participating?: boolean
}

export type SocialData = {
    name: string,
    href: string
}

export type SocialIcon = {
    name: string,
    src: string
}

export const membersData: MemberData[] = [ // Order of members determines the order of render on the site
    {
        "username": "Lordimass",
        "icon" : `${IMAGES_BUCKET}streamer-icons/lordimass-icon.png`,
        "name" : "Sam",
        "pronouns" : "He/Him",
        "socials" : [ // First social is linked on the username
            {name: "twitch", href: "https://twitch.tv/lordimass"},
            {name: "youtube", href: "https://www.youtube.com/@lordimass1713"},
            {name: "bsky", href: "https://bsky.app/profile/lordimass.net"},
            {name: "discord", href: "https://discord.com/users/969949353605230604"},
            {name: "website", href: "https://lordimass.net"},
            {name: "instagram", href: "https://www.instagram.com/lordimass/"},
        ],
        streaming: true,
        participating: true,
    },
    {
        "username": "Goose",
        "icon" : `${IMAGES_BUCKET}streamer-icons/goose-icon.png`,
        "name" : "Zac",
        "pronouns" : "He/Him",
        "socials" : [
            {name: "twitch", href: "https://www.twitch.tv/thisisgoosewithaknife"},
            {name: "youtube", href: "https://www.youtube.com/@GosoeGoose"},
            {name: "discord", href: "https://discord.com/users/663784977871142912"},
            {name: "instagram", href: "https://www.instagram.com/goosewitha_knife/"},
        ],
        streaming: true,
        participating: true,
    },
    {
        "username": "otherworldlyfinn",
        "icon" : `${IMAGES_BUCKET}streamer-icons/otherwordlyfinn-icon.png`,
        "name" : "Finn",
        "pronouns" : "He/They",
        streaming: false,
        participating: true,
    },
    {
        "username": "deckedbyschmeck",
        "icon" : `${IMAGES_BUCKET}streamer-icons/schmeck-icon.png`,
        "name" : "James",
        "pronouns" : "He/Him",
        streaming: false,
        participating: true,
    },
    {
        "username": "Coltian",
        "icon" : `${IMAGES_BUCKET}streamer-icons/coltian-icon.png`,
        "name" : "Olivia",
        "pronouns" : "She/Her They/Them",
        streaming: false,
        participating: true,
    },
    {
        "username": "Jorje",
        "icon" : `${IMAGES_BUCKET}streamer-icons/george-icon.png`,
        "name" : "George",
        "pronouns" : "He/Him",
        streaming: false,
        participating: true,
    },
    {
        "username": "jasonwilliams",
        "icon" : `${IMAGES_BUCKET}streamer-icons/ed-icon.png`,
        "name" : "Edward",
        "pronouns" : "Any",
        streaming: false,
        participating: true,
    },
    {
        "username": "Lkactus",
        "icon" : `${IMAGES_BUCKET}streamer-icons/lkactus-icon.png`,
        "name" : "Logan",
        "pronouns" : "He/Him",
        streaming: false,
        participating: true,
    },
    {
        "username": "Skipper",
        "icon" : `${IMAGES_BUCKET}/streamer-icons/skipper-icon.png`,
        "name" : "Konrad",
        "pronouns" : "He/Him",
        // "socials" : [
        //     {name: "twitch", href: "https://www.twitch.tv/masterskipper_"},
        //     {name: "youtube", href: "https://www.youtube.com/channel/UCwYIvxb2pGDQvWL0J340wzg"},
        //     {name: "bsky", href: "https://bsky.app/profile/skipprr.bsky.social"},
        //     {name: "discord", href: "https://discord.com/users/719290239696240731"},
        //     {name: "wiki", href: "https://reformation.wiki.gg/Skipper"},
        // ]
        streaming: false,
        participating: false,
    },
    {
        "username": "Dartnk",
        "icon" : `${IMAGES_BUCKET}streamer-icons/darth-icon.png`,
        "name" : "Ben",
        "pronouns" : "He/Him",
        // "socials" : [
        //     {name: "youtube", href: "https://www.youtube.com/@DarthDankulous"},
        // ]
        streaming: false,
        participating: false,
    },
    {
        "username": "FourYearChaos",
        "icon" : `${IMAGES_BUCKET}streamer-icons/chaos-icon.png`,
        "name" : "Alan",
        "pronouns" : "He/Him",
        // "socials" : [
        //     {name: "twitch", href: "https://www.twitch.tv/four_year_chaos"},
        //     {name: "discord", href: "https://discord.com/users/646413778807816194"},
        // ]
        streaming: false,
        participating: false,
    },
]

export const socialIcons: SocialIcon[] = [
    {name: "twitch", src: `${IMAGES_BUCKET}social-platform-icons/twitch.png`},
    {name: "youtube", src: `${IMAGES_BUCKET}social-platform-icons/youtube.png`},
    {name: "bsky", src: `${IMAGES_BUCKET}social-platform-icons/bluesky.png`},
    {name: "discord", src: `${IMAGES_BUCKET}social-platform-icons/discord.jpg`},
    {name: "website", src: `${IMAGES_BUCKET}social-platform-icons/web.svg`},
    {name: "wiki", src: `${IMAGES_BUCKET}social-platform-icons/rfwiki.png`},
    {name: "instagram", src: `${IMAGES_BUCKET}social-platform-icons/instagram.png`},
]
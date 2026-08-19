/**
 * Lake Erie Church (LEC) — Madison, Ohio
 * Lead Pastors: Bill and Shelley Isaacs (since 2019), the 13th pastors.
 * Founded 1966 in Lake County by Pastors Lloyd and Virginia Scott.
 *
 * Verified from lakeeriechurch.com (Dec 2025 / Apr 2026 site):
 *   - Services: Sundays 10:00am – 12:00pm
 *   - 2300 Hubbard Rd, Madison, OH 44057
 *   - (440) 983-4140
 *   - YouTube: /channel/UCO2LSyS1WFmZvwEnaeYufFw
 *   - Brand: dark teal + navy, "Loving God, Loving People"
 *
 * NOTE: Do NOT confuse with Lake Erie Church in Erie, PA (lakeerienow.com) —
 * unrelated church, different pastors.
 *
 * TODO_FROM_CALL: public email, kids/youth ministry names + times,
 * midweek schedule, giving platform URL — currently routed through the old
 * site; get the direct Tithely/Givelify/PushPay URL so giving doesn't depend
 * on lakeeriechurch.com staying up, missions country specifics,
 * photos (building, congregation, missions, outreach), whether the
 * "Between Sundays" podcast is still recording.
 */

import logoHorizontal from "@/assets/lakeerie/logo-horizontal.png.asset.json";
import heroImage from "@/assets/lakeerie/hero.jpg.asset.json";
import waves from "@/assets/lakeerie/waves.jpg.asset.json";
import groupOuting from "@/assets/lakeerie/group-outing.jpg.asset.json";
import kidsTwoBoys from "@/assets/lakeerie/kids-two-boys.jpg.asset.json";
import kidsPlay from "@/assets/lakeerie/kids-play.jpg.asset.json";
import youthThirst from "@/assets/lakeerie/youth-thirst.jpg.asset.json";
import welcomeDesk from "@/assets/lakeerie/welcome-desk.jpg.asset.json";

export const siteConfig = {
  church: {
    name: "Lake Erie Church",
    shortName: "Lake Erie Church",
    city: "Madison, OH",
    tagline: "Where you can believe and belong.",
    mission:
      "Loving God, Loving People — a multi-generational, multi-cultural Pentecostal church in Lake County with a heart for our community and a bold vision for the world.",
    story: [
      "Lake Erie Church began in 1966 in Lake County, Ohio — the vision and dreams of Pastors Lloyd and Virginia Scott. Sixty years and thirteen pastors later, that vision is still going. Bill and Shelley Isaacs have led the church since 2019, and since 2022 we've called Madison home.",
      "Years ago a prophecy was spoken over this church: that it would be a light to the nations of the world. Today we are engaged in missions on five continents — evangelism, church planting, children's ministry, and benevolence work in some of the poorest places on earth. And right here in Lake County we serve the homeless, widows, and young mothers. Six generations now worship together on our campus.",
    ],
    foundedLine: "Serving Lake County since 1966",
  },

  brand: {
    logoText: "Lake Erie Church",
    logoImageSrc: logoHorizontal.url,
    heroMedia: {
      type: "image" as "image" | "video",
      imageSrc: heroImage.url,
      videoSrc: "",
    },
    storyImageSrc: groupOuting.url,
  },

  service: {
    timesShort: "Sundays · 10:00 AM",
    timesLong: [{ day: "Sunday Worship", time: "10:00 AM – 12:00 PM" }],
    address: "2300 Hubbard Rd, Madison, OH 44057",
    mapEmbedUrl:
      "https://www.google.com/maps?q=2300+Hubbard+Rd,+Madison,+OH+44057&output=embed",
    mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=2300+Hubbard+Rd%2C+Madison%2C+OH+44057",
    practical: [
      { label: "Parking", value: "Free, on campus" },
      { label: "Service length", value: "About two hours" },
      { label: "Kids & youth", value: "Ministry for every age, every Sunday" },
      { label: "What to wear", value: "Come exactly as you are" },
    ],
  },

  expect: [
    {
      icon: "Users" as const,
      title: "Believe and belong",
      body: "Multi-generational and multi-cultural by conviction, not by accident. Six generations worship together here — there is a place for you in this house.",
    },
    {
      icon: "Flame" as const,
      title: "A church that expects God to move",
      body: "We're a Pentecostal church, and we come on Sunday expecting an encounter with Jesus Christ — not a performance about Him.",
    },
    {
      icon: "Heart" as const,
      title: "A light to the nations",
      body: "Missions on five continents, and outreach right here in Lake County for the homeless, for widows, and for young mothers.",
    },
    {
      icon: "Shirt" as const,
      title: "Come exactly as you are",
      body: "No dress code and nothing to prove. Walk in on a Sunday and you'll be welcomed like you've been here for years.",
    },
  ],

  life: [
    { src: heroImage.url, alt: "Sunday morning worship at Lake Erie Church" },
    { src: welcomeDesk.url, alt: "Welcome desk greeting guests at Lake Erie Church" },
    { src: kidsTwoBoys.url, alt: "Kids having fun in LEC Kids ministry" },
    { src: waves.url, alt: "Lake Erie shoreline near Madison, Ohio" },
    { src: kidsPlay.url, alt: "Children playing together during kids ministry" },
    { src: youthThirst.url, alt: "Thirst youth ministry room at Lake Erie Church" },
  ],

  ministries: [
    { name: "Missions", line: "Evangelism, church planting, children's ministry, and benevolence work across five continents." },
    { name: "Community Outreach", line: "Serving the homeless, widows, and young mothers right here in Lake County." },
    { name: "Generations Matter ELC", line: "Early learning for infants through Pre-K, launched in 2022 for our community's families." },
    { name: "Generations Matter Academy", line: "Academic excellence taught with a Biblical worldview — first classrooms opened in 2025." },
    { name: "Kids & Youth", line: "Ministry for every age, with six generations worshipping together on one campus." },
    { name: "Between Sundays", line: "Our podcast — conversations that carry the Sunday message into the rest of your week." },
  ],

  events: [
    {
      date: "Sundays · 10:00 AM",
      title: "Join Us This Sunday",
      blurb: "Come a few minutes early and someone will help you get settled.",
    },
    {
      date: "Every week",
      title: "New Here? Plan a Visit",
      blurb: "Let us know you're coming and we'll have someone ready to welcome you by name.",
    },
    {
      date: "Anytime",
      title: "Watch LEC Online",
      blurb: "Can't make it to Madison? Our services and messages are on YouTube.",
    },
  ],

  sermon: {
    title: "This Week's Message",
    speaker: "Pastor Bill Isaacs",
    series: "Lake Erie Church",
    date: "Every Sunday",
    summary:
      "Watch this week's message, or catch up on recent teaching from our YouTube channel before you visit in person.",
    embedUrl: "",
    watchUrl: "https://www.youtube.com/channel/UCO2LSyS1WFmZvwEnaeYufFw",
  },

  give: {
    line: "We make a living by what we get, but a life by what we give. Your giving supports this church, our neighbors in Lake County, and mission work on five continents.",
    onlineUrl: "#contact",
  },

  welcomeVideo: {
    enabled: false,
    eyebrow: "Meet us first",
    heading: "A quick hello before you visit.",
    body:
      "Visiting a new church can feel like a big step. Here's a short hello from Pastors Bill and Shelley so you know exactly who you'll be meeting on Sunday.",
    posterSrc: groupOuting.url,
    embedUrl: "",
  },

  contact: {
    phone: "(440) 983-4140",
    email: "info@lakeeriechurch.com",
    socials: [
      { label: "Facebook", url: "https://www.facebook.com/lechurch/" },
      { label: "YouTube", url: "https://www.youtube.com/channel/UCO2LSyS1WFmZvwEnaeYufFw" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

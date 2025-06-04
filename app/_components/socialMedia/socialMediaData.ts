import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

type SocialMediaIconType =
  | typeof Facebook
  | typeof Twitter
  | typeof Instagram
  | typeof Youtube;

interface SocialMediaItem {
  title: string;
  value: string;
  change: string;
  icon: SocialMediaIconType;
  iconProps: { size: number; color: string };
  border: string;
  isNegative?: boolean;
}

interface OverviewItem {
  title: string;
  icon: SocialMediaIconType;
  iconProps: { size: number; color: string };
  value: string;
  change: string;
  isNegative?: boolean;
}

export const socialMediaData: SocialMediaItem[] = [
  {
    title: "@nathanf",
    value: "1987",
    change: "12 Today",
    icon: Facebook,
    iconProps: { size: 16, color: "#178FF5" },
    border: "border-blue-600",
  },
  {
    title: "@nathanf",
    value: "1044",
    change: "99 Today",
    icon: Twitter,
    iconProps: { size: 16, color: "#1DA1F2" },
    border: "border-sky-400",
  },
  {
    title: "@realnathanf",
    value: "11k",
    change: "1099 Today",
    icon: Instagram,
    iconProps: { size: 16, color: "#E1306C" },
    border: "border-pink-500",
  },
  {
    title: "Nathan F.",
    value: "8239",
    change: "144 Today",
    icon: Youtube,
    iconProps: { size: 16, color: "#FF0000" },
    border: "border-red-600",
    isNegative: true,
  },
];

export const overviewData: OverviewItem[] = [
  {
    title: "Page Views",
    icon: Facebook,
    iconProps: { size: 16, color: "#178FF5" },
    value: "87",
    change: "3%",
  },
  {
    title: "Likes",
    icon: Facebook,
    iconProps: { size: 16, color: "#178FF5" },
    value: "52",
    change: "2%",
    isNegative: true,
  },
  {
    title: "Likes",
    icon: Instagram,
    iconProps: { size: 16, color: "#E1306C" },
    value: "5462",
    change: "2257%",
  },
  {
    title: "Profile Views",
    icon: Instagram,
    iconProps: { size: 16, color: "#E1306C" },
    value: "52k",
    change: "1375%",
  },
  {
    title: "Retweets",
    icon: Twitter,
    iconProps: { size: 16, color: "#1DA1F2" },
    value: "117",
    change: "303%",
  },
  {
    title: "Likes",
    icon: Twitter,
    iconProps: { size: 16, color: "#1DA1F2" },
    value: "507",
    change: "553%",
  },
  {
    title: "Likes",
    icon: Youtube,
    iconProps: { size: 16, color: "#FF0000" },
    value: "107",
    change: "19%",
    isNegative: true,
  },
  {
    title: "Total Views",
    icon: Youtube,
    iconProps: { size: 16, color: "#FF0000" },
    value: "1407",
    change: "12%",
    isNegative: true,
  },
];

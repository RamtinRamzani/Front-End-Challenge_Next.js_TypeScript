export type TextContent = {
  id: string;
  title: string;
  subtitle: string;
  picture: string;
  highlight: string;
  description: string;
  size?: "small" | "medium" | "large";
};

export const sampleTexts: Omit<TextContent, "id" | "size">[] = [
  {
    title: "Daniel Cliford",
    subtitle: "Verified Graduate",
    picture: "/images/jonior/testemonial-grid/image-daniel.jpg",
    highlight: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae culpa officia accusantium ea optio reiciendis ab dolore, neque fugit deleniti sed, fugiat quidem.",
  },
  {
    title: "Jonathan Walters",
    subtitle: "Verified Graduate",
    picture: "/images/jonior/testemonial-grid/image-jonathan.jpg",
    highlight: "The team was very supportive and kept me motivated",
    description:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company.",
  },
  {
    title: "Jeanette Harmon",
    subtitle: "Verified Graduate",
    picture: "/images/jonior/testemonial-grid/image-jeanette.jpg",
    highlight: "An overall wonderful and rewarding experience",
    description:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  },
  {
    title: "Patrick Abrams",
    subtitle: "Verified Graduate",
    picture: "/images/jonior/testemonial-grid/image-patrick.jpg",
    highlight:
      "Awesome teaching support from TAs who did the bootcamp themselves.",
    description:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer.",
  },
  {
    title: "Kira Whittle",
    subtitle: "Verified Graduate",
    picture: "/images/jonior/testemonial-grid/image-kira.jpg",
    highlight: "Such a life-changing experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
  },
];

export const boxes: {
  id: string;
  className: string;
  size: "small" | "medium" | "large";
}[] = [
  {
    id: "box1",
    className:
      "bg-blue-600 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 rounded-md p-6 flex flex-col gap-4",
    size: "medium",
  },
  {
    id: "box2",
    className:
      "bg-black md:col-span-1 md:row-span-1 rounded-lg p-6 flex flex-col gap-4",
    size: "small",
  },
  {
    id: "box3",
    className:
      "bg-blue-600 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 rounded-lg p-6 flex flex-col gap-4",
    size: "large",
  },
  {
    id: "box4",
    className:
      "bg-red-400 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 rounded-lg p-6 flex flex-col gap-4",
    size: "small",
  },
  {
    id: "box5",
    className:
      "bg-red-800 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 rounded-lg p-6 flex flex-col gap-4",
    size: "medium",
  },
];

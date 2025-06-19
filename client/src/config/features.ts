export interface FeaturesItem {
  title: string;
  description: string;
  icon: string;
}

export const Features: FeaturesItem[] = [
  {
    title: "Create & Share Rooms",
    description:
      "Host a room faster than your friends can say 'what should we watch next?'",
    icon: "/perk-one.svg",
  },
  {
    title: "Democratic Playlist",
    description:
      "Let democracy reign in your watch party. May the best video win, and the worst get buried.",
    icon: "/perk-two.svg",
  },
  {
    title: "Real-Time Reordering",
    description:
      "Videos climb or plummet the queue in real-time. Fame is fleeting in the WatchPool.",
    icon: "/perk-three.svg",
  },
  {
    title: "Host Controls",
    description:
      "Keep the party civil with moderation tools. Sorry, no rickrolls unless approved.",
    icon: "/perk-four.svg",
  },
];

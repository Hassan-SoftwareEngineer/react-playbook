import type { HeaderProps } from "./types";
import { LiaGithub } from "react-icons/lia";

export const headerLinks: HeaderProps[] = [
  {
    title: "Learn",
    path: "learn",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Blog",
    path: "blog",
  },
  {
    title: <LiaGithub size={30} />,
    path: "github",
  },
];

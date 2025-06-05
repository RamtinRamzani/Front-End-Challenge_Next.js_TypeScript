import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { ListItem } from "./ListItem";

interface LevelProps {
  level: string;
  components: {
    title: string;
    href: string;
    description: string;
  }[];
}

function Level({ level, components }: LevelProps) {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="cursor-pointer py-4 px-6 rounded-md hover:bg-gray-700 bg-primary-800">
          {level}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute left-0 top-full mt-1 w-[var(--radix-navigation-menu-viewport-width)]">
          <ul className="grid md:grid-cols-2 grid-cols-1 md:gap-3 p-[clamp(4px,2vw,16px)]  md:w-[600px] w-52 bg-primary-900 rounded-md shadow-lg">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
                className="text-white hover:bg-gray-700"
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

export default Level;

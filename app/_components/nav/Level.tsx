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
          <ul className="grid grid-cols-2 gap-3 p-4 w-[600px] bg-primary-900 rounded-md shadow-lg">
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

"use client";

import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import Level from "./Level";
import { joniorData } from "./navData";

function Navigation() {
  return (
    <NavigationMenu className="flex gap-x-8 relative flex-1 mx-24">
      <Level level="jonior" components={joniorData} />
    </NavigationMenu>
  );
}

export default Navigation;

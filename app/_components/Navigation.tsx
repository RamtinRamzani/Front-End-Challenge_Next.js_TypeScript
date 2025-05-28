"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Base Apparel",
    href: "/projects/jonior/base-apparel",
    description: "A Simple Sero Section Example.",
  },
  {
    title: "Faq Accordion",
    href: "/projects/jonior/faq-accordion",
    description: "Faq Accordion.",
  },
  {
    title: "Age Calculator",
    href: "/projects/jonior/age-calculator",
    description: "Calculate your age.",
  },
  {
    title: "Contact form",
    href: "/projects/jonior/contact-form",
    description: "Reausable contact form.",
  },
];

function Navigation() {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer py-2 px-4 rounded-md hover:bg-gray-700">
            Jonior
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 top-full mt-1 w-[var(--radix-navigation-menu-viewport-width)]">
            <ul className="grid gap-3 p-4 w-[400px] bg-primary-900 rounded-md shadow-lg">
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
    </NavigationMenu>
  );
}

export default Navigation;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 ${
            className || ""
          }`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useState } from "react";

export const NavbarComponent = () => {

  const [activeId, setActiveId] = useState(1);

  const menuItems = [
    { id: 1, name: "Start Countdown", link: "#startCountdown", label: "Start Countdown" },
    // { id: 2, name: "About", link: "#about", label: "About" },
  ];

  return (
    <Navbar className="!font-dmsans">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flows
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button href="#getStarted">Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {menuItems.map((item) => (
          <NavbarLink key={item.id} href={item.link}
            active={activeId === item.id}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};
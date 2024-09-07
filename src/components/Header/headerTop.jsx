import React from "react";

const Header = () => {
  const navItems = [
    { name: "HOME", href: "#" },
    { name: "SERVICE", href: "#" },
    { name: "CASE STUDY", href: "#" },
    { name: "EVENTS", href: "#" },
    { name: "BLOG", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <header className="bg-black text-white">
      {/* Top Section - Logo and Language Selector */}
      <div className="flex justify-between items-center px-6 py-2">
        {/* Language Selector */}
        <div className="flex items-center space-x-3">
          <img
            src="/us_flag.png"
            alt="US Flag"
            className="h-5 w-5 rounded-full"
          />{" "}
          {/* Replace with actual flag path */}
          <span className="text-sm">ENG</span>
        </div>
        <nav>
          <ul className="flex justify-center space-x-8 py-3 text-sm font-montserrat">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <a href={item.href} className="hover:text-primary-orange">
                  {item.name}
                  {/* Conditionally render the arrow only for the 'SERVICE' item */}
                  {item.name === "SERVICE" && " ▾"}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="/profit-assurance-logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />{" "}
          {/* Replace with actual logo path */}
        </div>
      </div>
    </header>
  );
};

export default Header;

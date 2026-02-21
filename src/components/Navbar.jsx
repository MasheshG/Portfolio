import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">

      {/* Hamburger LEFT */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Logo */}
      <div className="logo">Mahesh G</div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;
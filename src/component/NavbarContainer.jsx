// src/components/NavbarContainer.jsx
import Navbar from "./Navbar"; // Navbar versi desktop
import NavbarMobile from "./NavbarMobile"; // Navbar versi mobile

function NavbarContainer() {
  return (
    <>
      {/* Navbar Desktop: Tampil hanya di layar yang lebih besar dari medium */}
      <div className="hidden md:flex">
        <Navbar />
      </div>

      {/* Navbar Mobile: Tampil hanya di layar yang lebih kecil dari medium */}
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </>
  );
}

export default NavbarContainer;

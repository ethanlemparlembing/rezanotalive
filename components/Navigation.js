import { useEffect, useState } from "react";
import NavbarLink from "./ui/NavbarLink";

export default function Navigation() {
  const [openCanvaMenu, setOpenCanvaMenu] = useState(false);

  const toggleOpenCanvaMenu = () => {
    setOpenCanvaMenu((prevOpenCanvaMenu) => !prevOpenCanvaMenu);
  };

  useEffect(() => {
    const handleOverflowHidden = () => {
      if (openCanvaMenu) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleOverflowHidden();

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openCanvaMenu]);

  return (
    <>
      <nav className="fixed left-0 top-0 h-16 w-full bg-white shadow-md z-10">
        <div className="max-w-6xl mx-auto h-full flex items-center px-10">
          <div className="flex h-full w-full flex-row items-center justify-between">
            <div>
              <a href="" className="text-lg font-bold">
                Rezanotalive
              </a>
            </div>
            <div className="hidden gap-3 sm:flex">
              <NavbarLink>Project</NavbarLink>
              <NavbarLink>TodosApp</NavbarLink>
            </div>
            <div className="sm:hidden">
              <button
                onClick={toggleOpenCanvaMenu}
                className="text-base font-semibold"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>
      {openCanvaMenu && (
        <nav className="fixed h-screen top-0 w-full bg-black z-50">
          <div className="h-16 bg-white flex justify-end px-10 max-w-6xl mx-auto">
            <button
              onClick={toggleOpenCanvaMenu}
              className="text-base font-semibold"
            >
              Close
            </button>
          </div>
        </nav>
      )}
    </>
  );
}

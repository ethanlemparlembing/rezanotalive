import { forwardRef } from "react";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

const AppLayout = forwardRef(function AppLayout({ children }, ref) {
  return (
    <div className="antialiased">
      <Header />
      <div className="max-w-6xl px-5 pb-10 mx-auto" ref={ref}>
        {children}
      </div>
      <Footer />
    </div>
  );
});

export default AppLayout;

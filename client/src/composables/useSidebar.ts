import { useState } from "react";

const useSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const displaySidebar = () => {
    setShowSidebar(true);
  };
  const hideSidebar = () => {
    setShowSidebar(false);
  };

  return {
    showSidebar,
    displaySidebar,
    hideSidebar,
  };
};

export default useSidebar;

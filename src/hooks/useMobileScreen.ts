import { useState, useEffect } from "react";

function useMobileScreen(breakpoint = 768): boolean {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobileScreen(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobileScreen;
}

export default useMobileScreen;

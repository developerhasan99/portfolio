import { useState, useRef, useEffect } from "react";
import context from "./context";

function Provider(props) {
  const stateObj = {
    isSticky: false,
    isMobileNav: false,
  };

  const [state, setState] = useState(stateObj);

  const handleMobileNav = () => {
    setState((prevState) => ({
      ...prevState,
      isMobileNav: !prevState.isMobileNav,
    }));
  };

  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setState((prevState) => ({
          ...prevState,
          isSticky: !entries[0].isIntersecting,
        }));
      },
      {
        rootMargin: "-250px 0px 0px 0px",
      }
    );
    observer.observe(heroRef.current);
  }, []);

  return (
    <context.Provider value={{ state, handleMobileNav, heroRef }}>
      {props.children}
    </context.Provider>
  );
}

export default Provider;

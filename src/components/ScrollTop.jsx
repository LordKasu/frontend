import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Grab the current URL path (e.g., "/services" or "/about")
  const { pathname } = useLocation();

  // Every time the pathname changes, run this code to scroll to the top left (0, 0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't actually render any HTML, it just runs logic!
  return null;
}

export default ScrollToTop;
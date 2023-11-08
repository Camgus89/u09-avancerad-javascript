import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnPageChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rulla till toppen av sidan när "location" ändras
  }, [location.pathname]);

  return null; // Detta är en funktionskomponent som inte renderar något synligt
}

export default ScrollToTopOnPageChange;

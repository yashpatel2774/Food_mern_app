// src/components/ScrollToTopOnRefresh.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTopOnRefresh = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      navigate(location.pathname, { replace: true });

      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return null;
};

export default ScrollToTopOnRefresh;

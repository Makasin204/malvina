import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Contacts from "./pages/Contacts";

function App() {
  const [currentPage, setCurrentPage] = useState("catalog");

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, "", `/${page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contacts":
        return <Contacts />;
      case "rent":
        return <Rent />;
      default:
        return <Catalog />;
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const page = window.location.pathname.replace("/", "") || "catalog";
      setCurrentPage(page);
    };

    window.addEventListener("popstate", handlePopState);

    // Викликаємо функцію при завантаженні сторінки, щоб синхронізувати стан з URL
    handlePopState();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="App">
      <Header navigateToPage={navigateToPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;

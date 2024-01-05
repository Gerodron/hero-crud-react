import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage } from "../pages";
import { Navbar } from "../../ui";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="mx-5 mt-2">
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="search" element={ <SearchPage /> } />
        <Route path="hero/:id" element={ <HeroPage /> } />
        
        <Route path="/" element={<Navigate to={"/marvel"} />} />
      </Routes>
      </div>
    </>
  );
};

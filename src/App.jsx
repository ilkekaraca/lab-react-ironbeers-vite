import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import Details from "./pages/Details";
import Header from "./components/Header";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* This is a parent route to display header for the below routes https://reactrouter.com/en/main/components/outlet */}
      <Route
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

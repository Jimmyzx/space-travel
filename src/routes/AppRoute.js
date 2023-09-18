import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "../pages/Spacecraft/Spacecraft";
import Planets from "../pages/Planets/Planets";

function AppRoute ()
{

return (  // DONE todo render routes
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />

    <Route path="/home" element={<Home />} />

    <Route path="/spacecrafts" element={<Spacecrafts />} />

    <Route path="/spacecrafts/build" element={<SpacecraftBuild />} />

    <Route path="/spacecraft/:id" element={<Spacecraft />} />

    <Route path="/planets" element={<Planets />} />
  </Routes>
);
}

export default AppRoute;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../features/dashboard/pages/Dashboard";
import Login from "../features/auth/pages/Login";
import Orders from "../features/orders/pages/Orders";
import Reports from "../features/reports/pages/Reports";
import Settings from "../features/settings/pages/Settings";
import POS from "../features/pos/pages/POS";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "../pages/Login/Login";
// import Dashboard from "../pages/Dashboard/Dashboard";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;

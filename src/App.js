import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

import GuestHome from "./Components/GuestManagement/GuestHome";
import BookingManagement from "./Components/Booking/BookingManagement";
import { ActivityManagement } from "./Components/Activity/ActivityManagement";
import PackageManagement from "./Components/Package/PackageManagement";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader";
import GuestEdit from "./Components/GuestManagement/GuestEdit";
import GuestDetails from "./Components/GuestManagement/GuestDetails";
import LocalDetails from "./Components/GuestManagement/LocalDetails";
import LocalEdit from "./Components/GuestManagement/LocalEdit";
import BookingDetails from "./Components/Booking/BookingDetails";
import ActivityEdit from "./Components/Activity/ActivityEdit";
import PackageDetails from "./Components/Package/PackageDetails";
import SubscriptionDetails from "./Components/Subscription/SubscriptionDetails";
import SubscriptionManag from "./Components/Subscription/SubscriptionManag";
import PayoutManag from "./Components/Payout/PayoutManag";
import PayoutDetails from "./Components/Payout/PayoutDetails";
import TransManag from "./Components/Transaction/TransManag";
import TransDetails from "./Components/Transaction/TransDetails";
import Help from "./Components/HelpSupport/Help";
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const GuestsDetails = lazy(() =>
  import("./Components/Dashboard/GuestsDetails")
);

function App() {
  return (
    <Routes>
      <Route exact path="*" element={<Login />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Loader" element={<Loader />} />

      <Route
        exact
        path="Dashboard"
        element={
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        exact
        path="Dashboard/Guests-Details/:id"
        element={
          <Suspense fallback={<Loader />}>
            <GuestsDetails />
          </Suspense>
        }
      />

      <Route exact path="Guest-Management" element={<GuestHome />} />
      <Route exact path="Guest-Management/Edit/:id" element={<GuestEdit />} />
      <Route
        exact
        path="Guest-Management/Details/:id"
        element={<GuestDetails />}
      />

      <Route
        exact
        path="Local-Management/Details/:id"
        element={<LocalDetails />}
      />
      <Route exact path="Local-Management/Edit/:id" element={<LocalEdit />} />

      <Route exact path="Booking-Management" element={<BookingManagement />} />
      <Route
        exact
        path="Booking-Management/Details/:id"
        element={<BookingDetails />}
      />
      <Route
        exact
        path="Activity-Management"
        element={<ActivityManagement />}
      />
      <Route
        exact
        path="Activity-Management/Details/:id"
        element={<ActivityEdit />}
      />
      <Route exact path="Package-Management" element={<PackageManagement />} />
      <Route
        exact
        path="Package-Management/Details/:id"
        element={<PackageDetails />}
      />

      {/* <Route
        exact
        path="Subscription-Management"
        element={<SubscriptionManag />}
      />
      <Route
        exact
        path="Subscription-Management/Details/:id"
        element={<SubscriptionDetails />}
      />
      <Route exact path="Payout-Management" element={<PayoutManag />} />
      <Route
        exact
        path="Payout-Management/Details/:id"
        element={<PayoutDetails />}
      />
      <Route exact path="Transaction-Management" element={<TransManag />} />
      <Route
        exact
        path="Transaction-Management/Details/:id"
        element={<TransDetails />}
      />
      <Route exact path="Help-Support-Management" element={<Help />} /> */}

      <Route exact path="Content-Management" element={<Help />} />
    </Routes>
  );
}

export default App;

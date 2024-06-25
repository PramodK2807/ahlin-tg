import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader";
import IsLoggedIn from "../src/utils/IsLoggedIn";

// Lazy imports
const Login = lazy(() => import("./Components/Login"));
const ForgotPassword = lazy(() => import("./Components/ForgotPassword"));
const ResetPassword = lazy(() => import("./Components/ResetPassword"));
const GuestHome = lazy(() => import("./Components/GuestManagement/GuestHome"));
const BookingManagement = lazy(() =>
  import("./Components/Booking/BookingManagement")
);
const ActivityManagement = lazy(() =>
  import("./Components/Activity/ActivityManagement")
);
const PackageManagement = lazy(() =>
  import("./Components/Package/PackageManagement")
);
const BookingDetails = lazy(() =>
  import("./Components/Booking/BookingDetails")
);
const ActivityEdit = lazy(() => import("./Components/Activity/ActivityEdit"));
const PackageDetails = lazy(() =>
  import("./Components/Package/PackageDetails")
);
const SubscriptionDetails = lazy(() =>
  import("./Components/Subscription/SubscriptionDetails")
);
const SubscriptionManag = lazy(() =>
  import("./Components/Subscription/SubscriptionManag")
);
const PayoutManag = lazy(() => import("./Components/Payout/PayoutManag"));
const PayoutDetails = lazy(() => import("./Components/Payout/PayoutDetails"));
const TransManag = lazy(() => import("./Components/Transaction/TransManag"));
const TransDetails = lazy(() =>
  import("./Components/Transaction/TransDetails")
);
const Help = lazy(() => import("./Components/HelpSupport/Help"));
const ContentManagement = lazy(() =>
  import("./Components/CMS/ContentManagement")
);
const EditContent = lazy(() => import("./Components/CMS/EditContent"));
const EditViewLocalGuest = lazy(() =>
  import("./Components/Common/EditViewLocalGuest")
);
const Admin = lazy(() => import("./Components/Admin/Admin"));
const Profile = lazy(() => import("./Components/Dashboard/Profile"));
const ChangePassword = lazy(() => import("./Components/Admin/ChangePassword"));
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const GuestsDetails = lazy(() =>
  import("./Components/Dashboard/GuestsDetails")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="*" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />

        <Route
          path="Dashboard"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            </IsLoggedIn>
          }
        />

        <Route
          path="Dashboard/Guests-Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <GuestsDetails />
              </Suspense>
            </IsLoggedIn>
          }
        />

        <Route
          path="/Admin"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <Admin />
              </Suspense>
            </IsLoggedIn>
          }
        >
          <Route path="Profile" element={<Profile />} />
          <Route path="Change-Password" element={<ChangePassword />} />
        </Route>

        <Route
          path="Guest-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <GuestHome />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Guest-Management/Edit/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <EditViewLocalGuest />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Guest-Management/Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <EditViewLocalGuest />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Local-Management/Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <EditViewLocalGuest />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Local-Management/Edit/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <EditViewLocalGuest />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Booking-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <BookingManagement />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Booking-Management/Details"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <BookingDetails />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Activity-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <ActivityManagement />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Activity-Management/Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <ActivityEdit />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Package-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <PackageManagement />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Package-Management/Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <PackageDetails />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Subscription-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <SubscriptionManag />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Subscription-Management/Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <SubscriptionDetails />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Payout-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <PayoutManag />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Payout-Management/Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <PayoutDetails />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Transaction-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <TransManag />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Transaction-Management/Details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <TransDetails />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Help-Support-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <Help />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Content-Management"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <ContentManagement />
              </Suspense>
            </IsLoggedIn>
          }
        />
        <Route
          path="Content-Management/details/:id"
          element={
            <IsLoggedIn>
              <Suspense fallback={<Loader />}>
                <EditContent />
              </Suspense>
            </IsLoggedIn>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;

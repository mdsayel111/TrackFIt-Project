import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Trainer from "../Pages/Trainer/Trainer";
import SignInOrSignUp from "../Pages/SignInOrSignUp/SignInOrSignUp";
import Gallery from "../Pages/Gallery/Gallery";
import BecomeTrainer from "../Pages/BecomeTainer/BecomeTrainer";
import Dashboard from "../Layout/Dashboard";
import AppliedTrainer from "../Pages/AppliedTrainer/AppliedTrainer";
import TrainerSlots from "../Pages/TrainerSlots/TrainerSlots";
import SlotBook from "../Pages/SlotBook/SlotBook";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AdminPrivateRoute from "../PrivateRoutes/AdminPrivateRoute";
import AdminAndTrainerPrivateRoute from "../PrivateRoutes/AdminAndTrainerPrivateRoute";
import TrainerPrivateRoute from "../PrivateRoutes/TrainerPrivateRoute";
import AddClasses from "../Pages/AddClasses/AddClasses";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import AddForum from "../Pages/AddForum/AddForum";
import Forums from "../Pages/Forums/Forums";
import NewsletterSubscribers from "../Pages/NewsletterSubscribers/NewsletterSubscribers";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import ManageSlots from "../Pages/ManageSlots/ManageSlots";
import ManageMembers from "../Pages/ManageMembers/ManageMembers";
import ForumDetails from "../Pages/ForumDeetails/ForumDetails";
import Activity from "../Pages/Activity/Activity";
import Profile from "../Pages/Profile/Profile";
import RecommendedClass from "../Pages/RecommendedClass/RecommendedClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Payment/Payment";
import Statistic from "../Pages/Statistic/Statistic";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trainer",
        element: <Trainer />,
      },
      {
        path: "/trainer-slots/:email",
        element: <TrainerSlots />,
      },
      {
        path: "/beacome-trainer",
        element: (
          <PrivateRoute>
            <BecomeTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "/slot-book/:id/:trainerEmail",
        element: (
          <PrivateRoute>
            <SlotBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/classes",
        element: (
          <PrivateRoute>
            <Classes />
          </PrivateRoute>
        ),
      },
      {
        path: "/class-details/:_id",
        element: (
          <PrivateRoute>
            <ClassDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/forums",
        element: (
          <PrivateRoute>
            <Forums />
          </PrivateRoute>
        ),
      },
      {
        path: "/forum/:id",
        element: <ForumDetails />,
      },
      {
        path: "/signin-or-signup",
        element: <SignInOrSignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // user route
      {
        path: "activity",
        element: (
          <PrivateRoute>
            <Activity />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "recommende-class",
        element: (
          <PrivateRoute>
            <RecommendedClass />
          </PrivateRoute>
        ),
      },

      // admin route
      {
        path: "applied-trainer",
        element: (
          <AdminPrivateRoute>
            <AppliedTrainer />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "statistic",
        element: (
          <AdminPrivateRoute>
            <Statistic />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "all-trainer",
        element: (
          <AdminPrivateRoute>
            <AllTrainer />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "news-letter-subscribers",
        element: (
          <AdminPrivateRoute>
            <NewsletterSubscribers />
          </AdminPrivateRoute>
        ),
      },

      // {
      //   path: "applied-trainer",
      //   element: <AppliedTrainer />,
      // },

      // trainer route
      {
        path: "add-classes",
        element: (
          <TrainerPrivateRoute>
            <AddClasses />
          </TrainerPrivateRoute>
        ),
      },
      {
        path: "manage-slots",
        element: (
          <TrainerPrivateRoute>
            <ManageSlots />
          </TrainerPrivateRoute>
        ),
      },
      {
        path: "manage-members",
        element: (
          <TrainerPrivateRoute>
            <ManageMembers />
          </TrainerPrivateRoute>
        ),
      },

      // admin and trainer both route
      {
        path: "add-forum",
        element: (
          <AdminAndTrainerPrivateRoute>
            <AddForum />
          </AdminAndTrainerPrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;

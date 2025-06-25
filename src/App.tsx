import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import UserList from "./pages/UserList";
import SettingList from "./pages/SettingList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    // element={<Root />}
    // loader={rootLoader}
    // action={rootAction}
    // errorElement={<ErrorPage />}
    >
      <Route path="/auth">
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="admin">
          <Route path="userManagement" element={<UserList />} />
          <Route path="settingManagement" element={<SettingList />} />

        </Route>
      </Route>
    </Route>
  )
);


function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App

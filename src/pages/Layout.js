import { Outlet } from "react-router-dom";
import NavLink from "../components/NavLink";

const Layout = () => {
  return (
    <>
      <div>
        <div class="flex h-screen bg-stone-100">
          <div class="hidden md:flex flex-col w-64 bg-stone-800">
            <div class="flex items-center justify-center h-16 bg-stone-900">
              <span class="text-stone-100 font-bold uppercase">AWS</span>
            </div>
            <div class="flex flex-col flex-1 overflow-y-auto">
              <nav class="flex-1 px-2 py-4 bg-stone-800">
                <NavLink to="/" text="Home"></NavLink>
                <NavLink to="/chapterone" text="Chapter 1"></NavLink>
                <NavLink to="/chaptertwo" text="Chapter 2"></NavLink>
                <NavLink to="/chapterthree" text="Chapter 3"></NavLink>
                <NavLink to="/chapterfour" text="Chapter 4"></NavLink>
                <NavLink to="/chapterfive" text="Chapter 5"></NavLink>
                <NavLink to="/chaptersix" text="Chapter 6"></NavLink>
                <NavLink to="/chapterseven" text="Chapter 7"></NavLink>
                <NavLink to="/chaptereight" text="Chapter 8"></NavLink>
                <NavLink to="/chapternine" text="Chapter 9"></NavLink>
                <NavLink to="/chapterten" text="Chapter 10"></NavLink>
                <NavLink to="/chaptereleven" text="Chapter 11"></NavLink>
                <NavLink to="/chaptertwelve" text="Chapter 12"></NavLink>
              </nav>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;

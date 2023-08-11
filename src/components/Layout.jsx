import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col items-center content-center w-full overflow-hidden">
      <header className="bg-blue-400 w-4/5 text-center h-fit text-4xl mb-4 p-2">
        Chatting App
      </header>
      <nav></nav>
      <section
        className="flex flex-col items-center overflow-y-auto w-3/4 bg-sky-300 p-10 rounded-3xl"
        style={{ height: "calc(100vh - 110px)" }}
      >
        <Outlet />
      </section>
      <footer className="fixed h-8 w-4/5 bg-blue-400 bottom-0"></footer>
    </div>
  );
};

export default Layout;

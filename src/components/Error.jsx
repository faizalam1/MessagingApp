import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center content-center w-full overflow-hidden">
      <header className="bg-blue-400 w-4/5 text-center h-12 text-4xl mb-4">
        Chatting App
      </header>
      <nav></nav>
      <section
        className="overflow-y-auto w-3/4 bg-sky-300 p-10 rounded-3xl"
        style={{ height: "calc(100vh - 110px)" }}
      >
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error?.statusText || error?.message}</i>
          </p>
        </div>
      </section>
      <footer className="fixed h-8 w-4/5 bg-blue-400 bottom-0"></footer>
    </div>
  );
};

export default Error;

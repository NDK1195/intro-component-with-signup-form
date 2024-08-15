import Form from "./Form";

function App() {
  return (
    <main className="min-h-screen bg-red">
      <div className="flex min-h-screen items-center justify-center bg-intro-mobile bg-contain bg-center bg-no-repeat lg:bg-intro-desktop">
        {/* container */}
        <div className="mx-6 my-16 flex flex-col items-center gap-16 text-white lg:mx-4 lg:my-0 lg:flex-row lg:gap-[45px]">
          {/* left content */}
          <div className="max-w-[525px] text-center lg:text-left">
            <h1 className="mb-4 text-[28px] font-bold leading-9 tracking-[-0.292px] lg:mb-3 lg:text-[50px] lg:leading-[55px] lg:tracking-[-0.521px]">
              Learn to code by watching others
            </h1>
            <p className="font-medium leading-[26px]">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          {/* left content */}

          {/* right content */}
          <div className="min-w-[327px] xl:min-w-[540px]">
            {/* promotion */}
            <div className="mb-6 rounded-[10px] bg-blue shadow-box">
              <p className="px-16 py-5 text-center text-[15px] leading-[26px] tracking-[0.268px]">
                <span className="font-bold">Try it free 7 days</span> then
                $20/mo. thereafter
              </p>
            </div>
            {/* promotion */}

            {/* form */}
            <div className="rounded-[10px] bg-white p-6 text-dark-blue shadow-box lg:p-10">
              <Form />

              {/* terms and services */}
              <p className="px-4 text-center text-[11px] font-medium leading-[21px] text-grayish-blue lg:leading-[26px]">
                By clicking the button, you are agreeing to our{" "}
                <a href="#" className="font-bold text-red">
                  Terms and Services
                </a>
              </p>
              {/* terms and services */}
            </div>
            {/* form */}
          </div>
          {/* right content */}
        </div>
        {/* container */}
      </div>
    </main>
  );
}
export default App;

import { authRoutes } from "@/common/constants";
import { banner } from "@/common/constants/images";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="h-screen bg-blue-50 py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-[1176px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-10">
          <div className="w-full max-w-[576px] text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-black-900">
              Effortless Inventory Management for Your Business
            </h2>
            <p className="text-base text-black-700 mt-4">
              With real-time tracking capabilities, you gain complete visibility
              into stock levels, movement, and usage patterns, enabling you to
              make data-driven decisions. The platform’s intelligent analytics
              and reporting tools help identify inefficiencies, reduce waste,
              and ensure that inventory levels are always optimized to meet
              demand without overstocking.
            </p>
            <Link
              to={authRoutes.login.path}
              className="px-10 py-2.5 bg-green-500 mt-5 inline-block rounded-full text-white"
            >
              Explore now
            </Link>
          </div>
          <div className="w-full max-w-[320px] md:max-w-[676px]">
            <img src={banner} alt="banner" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

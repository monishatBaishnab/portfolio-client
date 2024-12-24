import About from "@/components/home/About";
import Header from "@/components/home/Header";

const Home = () => {
  return (
    <div>
      <div>
        <div className="z-0 absolute left-0 flex items-center justify-center right-0 -top-48">
          <div className="h-96 w-1/2 bg-gradient-to-l from-m-bg-light to-m-bg-light via-purple-600 rounded-full opacity-10 blur-3xl"></div>
        </div>
        <Header />
        <About />
      </div>
    </div>
  );
};

export default Home;

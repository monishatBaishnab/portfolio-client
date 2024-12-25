import SCard from "../Card/SCard";

const TechStack = () => {
  return (
    <div className="container space-y-8">
      <h1 className="text-white/80 text-2xl font-semibold">Skills & Tools</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Skills Card */}
        <SCard />
        <SCard />
        <SCard />
        <SCard />
        <SCard />
        <SCard />
        <SCard />
      </div>
    </div>
  );
};

export default TechStack;

import About from "@/components/home/About";
import BContainer from "@/components/home/BContainer";
import Contact from "@/components/home/Contact";
import Header from "@/components/home/Header";
import PContainer from "@/components/home/PContainer";
import TechStack from "@/components/home/TechStack";
import Navbar from "@/components/Navbar";
import axiosInstance from "@/lib/axios";
import { TBlog, TProject } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchAllProjects = async () => {
  const params = new URLSearchParams();
  params.append("limit", "3");
  params.append("page", "1");
  params.append("sort", "title");
  const result = await axiosInstance.get("/projects", { params });
  return result?.data;
};

const fetchAllBlogs = async () => {
  const params = new URLSearchParams();
  params.append("limit", "3");
  params.append("page", "1");
  params.append("sort", "title");
  const result = await axiosInstance.get("/blogs", { params });
  return result?.data;
};

const Home = () => {
  const { data: projectData, isLoading: projectLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchAllProjects,
  });
  const { data: blogData, isLoading: blogLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchAllBlogs,
  });

  return (
    <div>
      <div>
        <div id="home" className="h-10"></div>
        <Navbar />
        <div className="z-0 absolute left-0 flex items-center justify-center right-0 -top-48">
          <div className="h-96 w-1/2 bg-gradient-to-l from-m-bg-light to-m-bg-light via-purple-600 rounded-full opacity-10 blur-3xl"></div>
        </div>
        <Header />
        <About />
        <div id="projects">
          <PContainer projects={projectData?.data as TProject[]} isLoading={projectLoading} />
        </div>
        <div id="skills">
          <TechStack />
        </div>
        <div id="blogs">
          <BContainer blogs={blogData?.data as TBlog[]} isLoading={blogLoading} />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
const Home = () => {
  return (
    <section className= "h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left">
            <span className="text-xl"> Junior Fullstack DevOps Engineer </span>
            <h1 className="h1">
              Hello Im <br /> <span className="text-accent">Nikolay Gerginov</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            As a Junior Fullstack DevOps Engineer, I build and improve features using Python and JavaScript, set up CI/CD pipelines, and manage infrastructure with Terraform. I also deploy apps with Docker and Kubernetes while keeping an eye on performance.
            </p>
            {/*btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                >
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              {/*socials*/}
              <div className="mb-8 xl:mb-8" >
                <Social containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div>
            <Photo/>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Home
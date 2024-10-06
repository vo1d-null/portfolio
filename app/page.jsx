import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
const Home = () => {
  return (
    <section className= "h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left">
            <span className="text-xl"> Junior Fullstack DevOps Engineer </span>
            <h1 className="h1 mb-6">
              Hello Im <br /> <span className="text-accent">Nikolay Gerginov</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">As a Junior Fullstack DevOps Engineer, I build and improve features using Python and JavaScript, set up CI/CD pipelines, and manage infrastructure with Terraform. I also deploy apps with Docker and Kubernetes while keeping an eye on performance.</p>
            {/* btn and socials */}
            <div>
              <Button>
                <span>Download CV</span>
              </Button>
            </div>
          </div>
          {/*photo*/}
          <div>photo</div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Home
import Container from "@/components/Common/Container/Container"
import AboutUsImg from "../../../assets/About.svg"
import AboutUsText from "../../../assets/AboutUsText.svg"



const About = () => {
    return (
        <div className=" py-[100px] text-center md:text-left">
            <Container>
                <div className="md:flex">
                    <div className="md:w-1/2 self-center pt-16">
                        <img src={AboutUsText} />
                        <h1 className="text-[1.8rem] md:text-[4rem] tracking-tighter font-medium text-neutral-900 md:leading-[4rem] pt-6">We help to bring your <br /><span className="italic">dream home </span> to reality</h1>
                        <div className="md:hidden ">
                            <img src={AboutUsImg} />
                        </div>
                        <p className=" text-[0.9rem] md:text-[1rem] text-[#7C7C7C] tracking-wider  font-light font2 pt-8 mdw-[92%] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
                        <p className="pt-6 text-[0.9rem] md:text-[1rem] text-[#7C7C7C] tracking-wider  font-light font2 md:w-[92%] leading-6">Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.</p>
                    </div>
                    <div className="hidden md:block w-1/2">
                        <img src={AboutUsImg} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
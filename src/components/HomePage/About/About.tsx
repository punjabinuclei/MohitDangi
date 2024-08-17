import Container from "@/components/Common/Container/Container"
import AboutUsImg from "../../../assets/About.svg"
import AboutUsText from "../../../assets/AboutUsText.svg"



const About = () => {
    return (
        <div className=" py-[100px]">
            <Container>
                <div className="flex">
                    <div className="w-1/2 self-center pt-16">
                        <img src={AboutUsText} />
                        <h1 className="text-[4rem] tracking-tighter font-medium text-neutral-900 leading-[4rem] pt-6">We help to bring your <br /><span className="italic">dream home </span> to reality</h1>
                        <p className="text-[1rem] text-[#7C7C7C] tracking-wider  font-light font2 pt-8 w-[92%] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
                        <p className="pt-6 text-[1rem] text-[#7C7C7C] tracking-wider  font-light font2 w-[92%] leading-6">Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.</p>
                    </div>
                    <div className="w-1/2">
                        <img src={AboutUsImg} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
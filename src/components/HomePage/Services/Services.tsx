import Container from "@/components/Common/Container/Container"
import ServicesText from "../../../assets/ServiceText.svg"
import ServiceImg1 from "../../../assets/Service1.svg"
import ServiceImg2 from "../../../assets/Service2.svg"
import ServiceImg3 from "../../../assets/Service3.svg"

const Services = () => {
    return (
        <Container>
            <div className="hidden py-10">
                <img src={ServicesText} />
                <h1 className="text-[4rem] tracking-tighter font-medium text-neutral-900 leading-[4rem] pt-6">We provide the <span className="italic">best solutions </span><br /> for your dream home</h1>
                <div className="grid grid-cols-3 gap-8 justify-items-center py-20">
                    <div className="px-[48px] border border-[#996830] w-full">
                        <div className=" pt-[48px] pb-[86px]">
                            <img src={ServiceImg1} />
                        </div>
                        <div>
                            <h1 className="text-[#2C2C2C] text-[2.3rem] leading-[3rem]">Architectural &<br /> Interior design</h1>
                        </div>
                        <div>
                            <p className="font2 tracking-wider text-neutral-600 py-6 ">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
                        </div>

                    </div>
                    <div className="px-[48px] border border-[#996830] w-full">
                        <div className=" pt-[48px] pb-[86px]">
                            <img src={ServiceImg2} />
                        </div>
                        <div>
                            <h1 className="text-[#2C2C2C] text-[2.3rem] leading-[3rem]">Building <br /> Renovation</h1>
                        </div>
                        <div>
                            <p className="font2 tracking-wider text-neutral-600 py-6">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
                        </div>

                    </div>
                    <div className="px-[48px] border border-[#996830] w-full">
                        <div className=" pt-[48px] pb-[86px]">
                            <img src={ServiceImg3} />
                        </div>
                        <div>
                            <h1 className="text-[#2C2C2C] text-[2.3rem] leading-[3rem]">Construciton<br /> Management</h1>
                        </div>
                        <div>
                            <p className="font2 tracking-wider text-neutral-600 py-6">Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
                        </div>

                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Services
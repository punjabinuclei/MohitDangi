import Container from "@/components/Common/Container/Container"
import RecentWorkText from "../../../assets/RecentWorks.svg"
import Works1 from "../../../assets/Works1.svg"
import Works2 from "../../../assets/Works2.svg"
import Works3 from "../../../assets/Works3.svg"



const RecentWorks = () => {
    return (
        <Container>
            <div className="border-b-2 pb-16 border-[#D9D9D6] mb-10">
                <div>
                    <img src={RecentWorkText} />
                </div>
                <h1 className="text-[4rem] tracking-tighter font-medium text-neutral-900 leading-[4rem] pt-6">Some of<span className="italic"> our crafts</span> <br />made with love to reality</h1>

                <div className="grid grid-cols-2 gap-20 justify-items-center">
                    <div className="pt-[96px]">
                        <img src={Works1} />

                        <h1 className="text-[2.5rem] tracking-tighter  text-neutral-900 leading-[4rem] pt-6">Villa Furnishing & Interior</h1>
                        <p className="text-neutral-600 font2 tracking-widest">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>

                        <div className="mt-16">
                            <button className="inline-flex bg-[#996830] px-6 py-[1rem] text-white font2 uppercase text-[0.9rem]">View More <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M7 7h10m0 0v10m0-10L7 17" />
                            </svg></button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative bottom-28" >
                            <img src={Works2} />
                            <h1 className="text-[2.5rem] tracking-tighter  text-neutral-900 leading-[4rem] pt-6">Luxury Hotel Renovation</h1>
                            <p className="text-neutral-600 font2 tracking-widest">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
                        </div>
                        <div className="relative bottom-16">
                            <img src={Works3} />
                            <h1 className="text-[2.5rem] tracking-tighter  text-neutral-900 leading-[4rem] pt-6">Residence Swimming Pool</h1>
                            <p className="text-neutral-600 font2 tracking-widest">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default RecentWorks
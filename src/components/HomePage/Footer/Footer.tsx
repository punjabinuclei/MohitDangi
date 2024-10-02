import Container from "@/components/Common/Container/Container"
import Connect from "../../../assets/Connect.svg"

const Footer = () => {
    return (
        <Container>
            <div className="md:flex justify-between pb-24 border-b-2  border-[#D9D9D6] mb-10">
                <div className="pb-12 md:pb-0 text-[1.9rem] md:text-[3.8rem] tracking-tighter font-medium text-neutral-900 md:leading-[4rem] pt-6 ">
                    <h1 className="">Kick-start your dream<br /> home with us</h1>
                    <h1 className="italic text-[#996830] underline underline-offset-8 ">Send us a hi</h1>
                </div>

                <div className="self-end pr-10 ">
                    <h1 className="text-[1.3rem] text-neutral-900 font-bold uppercase tracking-tighter">Bhilwara, Rajasathan</h1>
                    <h2 className="pb-12 md:pb-0 text-[1rem] text-neutral-900 tracking-wide">962 Fifth Avenue Str, 3rd Floor-Trump<br /> Building IND 10006, India.</h2>

                    <h1 className=" text-[1.3rem] text-neutral-900 md:pt-4 font-bold uppercase tracking-tighter">Email us at</h1>
                    <h2 className="italic text-[1.6rem] text-[#996830] relative md:bottom-2 tracking-wide">mohitdangi@gmail.com</h2>
                </div>
            </div>
            <div className="pb-10  md:flex justify-between">
                <div>
                    <p className="font-light tracking-wider  text-neutral-900 italic">© 2024 <span className="text-[#996830] ">Mohit</span> Dangi - Award winning interior design studio.</p>
                </div>
                <div className="pt-10 md:pt-0">
                    <img src={Connect} />
                </div>
            </div>
        </Container>
    )
}

export default Footer
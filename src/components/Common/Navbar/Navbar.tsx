import Container from "@/components/Common/Container/Container"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Container>
            <div className="flex justify-between pt-8">
                <div className="flex">
                    <h1 className="text-[2rem] relative bottom-4"><span className="text-[#996830]">MOHIT</span> DANGI</h1>
                </div>
                <div className="flex justify-between font2 tracking-tight text-[0.9rem] font-semibold">
                    <Link to="HomePage"><p className="px-6">Home</p></Link>
                    <Link to="About"><p className="px-6">About</p></Link>
                    <Link to="Services"><p className="px-6">Services</p></Link>
                    <Link to="OurWork"><p className="px-6">Our Work</p></Link>
                    <div>
                        <button className="relative bottom-2 ml-6 inline-flex bg-[#996830] px-6 py-2 text-white rounded-md">Contact us <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M7 7h10m0 0v10m0-10L7 17" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
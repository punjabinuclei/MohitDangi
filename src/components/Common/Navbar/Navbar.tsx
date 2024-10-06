import Container from "@/components/Common/Container/Container"
import { Link } from "react-router-dom"
import "./style.css"

const Navbar = () => {
    return (
        <Container>
            <div className="flex justify-between md:justify-between pt-4 ">
                <div className="md:flex">
                    <h1 className="md:text-[2rem] relative top-1  md:bottom-6"><span className="text-[#996830]">MOHIT</span> DANGI</h1>
                </div>
                <div className="hidden md:flex justify-between font2 tracking-wide text-[0.9rem] relative top-6">
                    <Link to="HomePage"><p className="px-6 hover-underline-animation">Home</p></Link>
                    <Link to="About"><p className="px-6 hover-underline-animation">About</p></Link>
                    <Link to="Services"><p className="px-6 hover-underline-animation">Services</p></Link>
                    <Link to="OurWork"><p className="px-6 hover-underline-animation">Our Work</p></Link>
                    <div>
                        <button className="relative bottom-2 ml-6 inline-flex bg-[#996830] px-6 py-2 text-white rounded-md box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; ">Contact us <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M7 7h10m0 0v10m0-10L7 17" />
                        </svg></button>
                    </div>
                </div>
                <div className="md:hidden">
                    <button className="text-[0.8rem]  inline-flex bg-[#996830] px-4 py-2 text-white rounded-md box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">Contact us <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                        <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M7 7h10m0 0v10m0-10L7 17" />
                    </svg></button>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
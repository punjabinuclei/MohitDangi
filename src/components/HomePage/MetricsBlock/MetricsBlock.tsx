import Container from "@/components/Common/Container/Container";

const Metrics = () => {
    return (
        <Container >
            <div className=" grid grid-cols-1    md:grid-cols-3 gap-4 justify-items-center border-b-2 pb-16 border-[#D9D9D6] mb-20 text-[#2C2C2C]">

                <div className="flex">
                    <h1 className="text-[3rem] md:text-[4.4rem]">100%</h1>
                    
                    <p className="self-center pl-2  md:pl-6 uppercase text-[0.7rem] md:text-[1.1rem] font2">Client <br /> Satisfaction</p>
                </div>

                <div className="flex">
                    <h1 className="text-[3rem] md:text-[4.4rem]">250+</h1>
                    <p className="self-center pl-3 md:pl-6 uppercase text-[0.7rem]  md:text-[1.1rem] font2">Employees On<br />Worldwide </p>
                </div>


                <div className="flex">
                    <h1 className= "text-[3rem] md:text-[4.4rem]">3469+</h1>
                    <p className="self-center pl-3 md:pl-4 uppercase text-[0.7rem] md:text-[1rem] font2">Projects Completed <br /> in 60 Countries</p>
                </div>

            </div>
        </Container>
    )
}

export default Metrics
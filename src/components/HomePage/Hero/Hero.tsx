import HeroImg from "../../../assets/Hero.svg"

const Hero = () => {
    return (
        <div className="text-center pt-[80px]">
            <div className="pb-[50px]">
                <h1 className="text-[5.5rem] tracking-tighter font-medium text-neutral-900">Make <span className="italic">your home</span> an ode to joy</h1>
                <p className="text-neutral-600 tracking-wide text-[1.3rem] font-extralight">We turn your empty house to a lovely home, making the compact spaces with space  saving <br /> furnitures. Making the unique tastes of yours into reality!</p>
            </div>
            <div>
                <img src={HeroImg} />
            </div>

        </div>
    )
}

export default Hero
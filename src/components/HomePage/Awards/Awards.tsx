import Container from '@/components/Common/Container/Container'
import AwardsText from '../../../assets/AwardsText.svg'
import AwardImage1 from "../../../assets/Award1.svg"
import AwardImage2 from "../../../assets/Award2.svg"
import AwardImage3 from "../../../assets/Award3.svg"
import AwardImage4 from "../../../assets/Award4.svg"


const Awards = () => {
    return (
        <div className="md:py-6 py-10 bg-[#2C2C2C] md:flex font2 font-thin text-[0.8rem]">
            <Container>
                <div className='md:flex'>
                    <div>
                        <img src={AwardsText} />
                    </div>
                    <div className='mt-4 md:mt-0 flex justify-between px-6'>
                        <div>
                            <img src={AwardImage1} />
                        </div>
                        <div className=' self-center pl-[1rem] text-[#D9D9D6]'>
                            <h1>Indian Design Award</h1>
                            <p>2023</p>
                        </div>
                    </div>

                    <div className='mt-4 md:mt-0 flex justify-between px-6 '>
                        <div>
                            <img src={AwardImage2} />
                        </div>
                        <div className=' self-center pl-[1rem] text-[#D9D9D6] '>
                            <h1>Indian Design Award</h1>
                            <p>2023</p>
                        </div>
                    </div>

                    <div className='mt-4 md:mt-0 flex justify-between px-6'>
                        <div>
                            <img src={AwardImage3} />
                        </div>
                        <div className=' self-center pl-[1rem] text-[#D9D9D6]'>
                            <h1>Indian Design Award</h1>
                            <p>2023</p>
                        </div>
                    </div>

                    <div className='mt-4 md:mt-0 flex justify-between px-6'>
                        <div>
                            <img src={AwardImage4} />
                        </div>
                        <div className=' self-center pl-[1rem] text-[#D9D9D6]'>
                            <h1>Indian Design Award</h1>
                            <p>2023</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Awards
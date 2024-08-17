import { ReactNode } from "react";


interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className='px-[112px] pt-[30px]'>
            {children}
        </div>
    )
}

export default Container
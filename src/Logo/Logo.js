import { useSelector } from "react-redux"
import logo from './Logo.svg'

const Logo = () => {
    const dataFetchingFulfilled = useSelector(state => state.ticketsData.fulfilled) 
    const classForLogo = 'logo-cont' 
    return (
        <div className={dataFetchingFulfilled ? classForLogo : classForLogo + ` ${classForLogo}--animation`}>
        <img src={logo}></img>
        </div>
    )
}
export default Logo
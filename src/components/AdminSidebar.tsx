import { IconType } from "react-icons"
import { AiFillFileText, AiOutlineFileText } from "react-icons/ai"
import { FaChartBar, FaChartLine, FaChartPie, FaStopwatch } from "react-icons/fa6"
import { IoPeopleCircle } from "react-icons/io5"
import { RiCoupon3Line, RiCouponLine, RiCustomerServiceLine, RiDashboardLine, RiGamepadLine, RiMoneyDollarBoxLine, RiShoppingBagLine } from "react-icons/ri"
import { Link } from "react-router-dom"

function AdminSidebar() {
  return (
    <aside>
        <h2>Logo..</h2>
        <div>
            <h5>Dashboard</h5>
            <ul>
                <Links text="Dashboard" url="/admin/dashboard" Icon={RiDashboardLine} location={location} />
                <Links text="Products" url="/admin/products" Icon={RiShoppingBagLine} location={location} />
                <Links text="Customers" url="/admin/customers" Icon={IoPeopleCircle} location={location} />
                <Links text="Transactions" url="/admin/transactions" Icon={AiOutlineFileText} location={location} />
            </ul>
        </div>

        <div>
            <h5>Charts</h5>
            <ul>
                <Links text="Bar" url="/admin/dashboard" Icon={FaChartBar} location={location} />
                <Links text="Pie" url="/admin/products" Icon={FaChartPie} location={location} />
                <Links text="Line" url="/admin/customers" Icon={FaChartLine} location={location} />
            </ul>
        </div>

        <div>
            <h5>Apps</h5>
            <ul>
                <Links text="Stopwatch" url="/admin/dashboard" Icon={FaStopwatch} location={location} />
                <Links text="Coupon" url="/admin/products" Icon={RiCouponLine} location={location} />
                <Links text="Toss" url="/admin/customers" Icon={RiGamepadLine} location={location} />
            </ul>
        </div>

    </aside>
)
}

interface LiProps{
    text:string,
    url:string,
    Icon:IconType,
    location:Location,

}

const Links =({text,url,Icon,location}:LiProps)=>(

    <li style={{
        backgroundColor:location.pathname.includes(url)?'rgba(0,115,255,0.1)':'#fff',
    }}>
        <Link 
        style={{
            color:location.pathname.includes(url)?'rgb(0,115,255)':'#000'
        }}
        to={url}>
        <Icon/>
        {text}
        </Link>
    </li>
)

export default AdminSidebar
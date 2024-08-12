import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import { BiMaleFemale, BiUserCircle } from "react-icons/bi"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import data from '../assets/data.json'
import { BarGraph, DoughnutGraph } from "../components/Charts";
import { PieChart } from "@mui/x-charts"
import TableData from "../components/TableData"
import { keyframes } from "@emotion/react"
import { useEffect, useState } from "react"
// import {Doughnut} from "../components/Charts"


// injectStyle(keyframesStyle);

// function injectStyle  (style) {

// };

function Dashboard() {
  return (
    <div className="admin-container">

      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input placeholder="Search for users data" type="text" />
          <FaRegBell />
          <BiUserCircle />
        </div>
        <section className="widgetcontainer">
          <WidgetItem percentage={-10} value={34000} heading={"Revenue"} amount={true} color="rgba(0, 115, 255, 1)" />
          <WidgetItem percentage={46} value={3400} heading={"Users"} amount={true} color="rgba(0 ,198 ,202 ,1)" />
          <WidgetItem percentage={40} value={15000} heading={"Products"} amount={true} color="rgba(255 ,196 ,0 ,1)" />
          <WidgetItem percentage={20} value={1200} heading={"Transactions"} amount={true} color="rgba(76, 0, 255,1)" />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>REVENUE & TRANSACTIONS</h2>
            <BarGraph />
          </div>
          <div className="dashboard-categories">
            <h2>INVENTORY</h2>
            <div>
              {
                data.categories.map((item) => (
                  <CategoryItem key={item.id} heading={item.heading} value={item.value} color={`hsl(${item.value * 4},${item.value}%,50%)`} />
                ))
              }

            </div>
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-ratio">
            <h2>Gender Ratio</h2>
            <PieChart
              height={300}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
              series={[
                {
                  data: [
                    { label: 'Group A', value: 400 },
                    { label: 'Group B', value: 300 },
                    { label: 'Group C', value: 300 },
                    { label: 'Group D', value: 200 },
                  ],
                  innerRadius: 30,
                  outerRadius: 100,
                  // startAngle: -90,
                  // endAngle: 180,
                  cx: '75%',
                  cy: '38%'
                }
              ]}
            />            <p>
              <BiMaleFemale />
            </p>
          </div>

          <div className="top-transaction">
            <TableData  />

          </div>
        </section>
      </main>
    </div>
  )
}

// const pData = [1310, 297, 325, 46, 322, 3210, 385];
// const uData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];


// let sampleDataArray=[
//     { data: pData, label: 'pvuv', id: 'pvId' ,},
//     { data: pData, label: 'uv', id: 'uId' ,},
//     { data: pData, label: 'qv', id: 'qId' ,},
//   ]

interface WidgetItemProps {
  heading: string,
  value: number,
  percentage: number,
  color?: string,
  amount?: boolean,
}

const WidgetItem = ({
  heading,
  value,
  percentage,
  color,
  amount
}: WidgetItemProps) => {
  //document.documentElement.style.setProperty('--secondary', '#071952');
  // let d_color= )



//   var spin = keyframes`
//            spin{ 0% {
//                    background: conic-gradient(${color} ${0}deg, #fff 0 );
//                 }
//                 100% {
//                    background: conic-gradient(${color} ${(Math.abs(percentage) / 100) * 360}deg, #fff 0 );
//                 }
// }
// `;

const [conicPercentage,setConicPercentage]=useState(0)


  useEffect(() => {
    const intervalId = setInterval(() => {
      setConicPercentage(conicPercentage => {
        if (conicPercentage < percentage) {
          return conicPercentage + 1;
        } else {
          return conicPercentage;
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  

  const circleStyles = {
    '--circle-color': color?.replace('1)', ' 0.1)'),
  }
  return <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {
        percentage > 0 ? (<span className="green">
          <HiTrendingUp />+{percentage}%{" "}
        </span>) : (<span className="red">
          <HiTrendingDown />{percentage}%{" "}
        </span>)
      }
    </div>
    <div className="widget-circle" style={{
      ...circleStyles,
      background: `conic-gradient(${color} ${(Math.abs(conicPercentage) / 100) * 360}deg, #fff 0 )`,
      // animation: `spin 2s linear 1`,
      // transform:,
      // transition: `transform 1s ease-in-out`
    }}
    >
      <span color={color} style={{ color: `${color}`,  }}>{percentage}%</span>
      {/* <div className="widget-circle-inner">
        <span color={color} style={{ color: `${color}` }}>{percentage}%</span>
        </div> */}
    </div>


  </article>
}

interface CategoryItemProps {
  color?: string;
  value?: number;
  heading?: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-items" >
    <h5>{heading}</h5>
    <div >
      <div style={{
        backgroundColor: color,
        width: value
      }} ></div>
    </div>
    <span>{value}%</span>
  </div>
)

export default Dashboard
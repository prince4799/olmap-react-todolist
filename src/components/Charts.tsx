import { PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';

const pData = [1310, 297, 325, 46, 322, 3210, 385];
const uData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
];

let sampleDataArray = [
    { data: pData, label: 'pvuv', id: 'pvId', },
    { data: pData, label: 'uv', id: 'uId', },
    { data: pData, label: 'qv', id: 'qId', },
]


export function BarGraph() {
    return (
        <BarChart
            //   width={500}
            height={300}
            series={sampleDataArray.map(item => (item))}

            colors={['rgb(40 122 255)', 'rgb(177 204 246)']}
            skipAnimation={false}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}

        />
    );
}

export function DoughnutGraph() {
    return (
        <PieChart
        height={300}
        slotProps={{
            legend: {
              hidden:true,
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
                    startAngle: -90,
                    endAngle: 180,
                }
            ]}
        />
    )
}

//   BarGraph ;

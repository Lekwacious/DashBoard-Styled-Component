import Style from 'styled-components/macro'


const Dashboard = Style.div`
display: flex;
width: 100%;
height: 100vh;
background: rgba(29, 102, 255, 0.2);
`
export const RecentTransactionText = Style.div`
position: absolute;
width: 206px;
height: 30px;
left: 398px;
top: 141px;


font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #031021;

`

export default Dashboard;
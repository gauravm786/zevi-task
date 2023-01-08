// import logo from './logo.svg';
// import './App.css';
import ZeviTask from "./component/ZeviTask";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Trend1 from "./component/Trend1"
import Trend2 from "./component/Trend2"
import Trend3 from "./component/Trend3"
import Trend4 from "./component/Trend4"
import Trend5 from "./component/Trend5"

const trend=[
  {
    id:1,
    trendPage:<Trend1 />
  },
  {
    id:2,
    trendPage:<Trend2 />
  },
  {
    id:3,
    trendPage:<Trend3 />
  },
  {
    id:4,
    trendPage:<Trend4 />
  },
  {
    id:5,
    trendPage:<Trend5 />
  }
]

// import Trend1 from "./Trend1"
function App() {
  return (
    <div className="App">
      {/* <ZeviTask /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZeviTask />}/>
        {
          trend.map((ele)=>{
            return(
            <Route path={`/${ele.id}`} element={ele.trendPage} key={ele.id}/>
            )
          })
        }
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

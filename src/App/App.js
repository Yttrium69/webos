import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../../public/CSS/stylesheet.css";

import "./attachErrorHandler";
import Add_member from "../views/addmember";
import Show_list from "../views/showlist";
import Mainpage from "../views/main";
import Backwork from "../views/backwork";
import Streaming from "../views/streaming";
import Write_comment from "../views/write_comment";
import Nav from "../components/footer";
import { QrScanner } from "@yudiel/react-qr-scanner";
import Qrpage from "../views/QR";

const App = function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show_list />} />
          <Route path="/addmember" element={<Add_member />} />
          <Route path="/backwork" element={<Backwork />} />
          <Route path="/showdetail" element={<Mainpage />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/qrscan" element={<Qrpage />}></Route>
          <Route
            path="write_comment"
            element={<Write_comment></Write_comment>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
export { App };

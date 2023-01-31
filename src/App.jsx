import { BrowserRouter, Routes, Route} from "react-router-dom";
import Forms from "./components/Forms";
import NotFound from "./components/NotFound";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Layout from "./pages/Layout";
import Stepper from "./pages/Stepper";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes><Route path='*' element={<NotFound/>}/>
          <Route exact element={<Home />} path="/home" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Inbox />} path="/inbox" />
          <Route element={<Forms/>} path="/forms" />
          <Route element={<Stepper/>} path="/stepper" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

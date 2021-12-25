import Home from "../home/Home";
import SignInSide from "../auth/SignIn";
import Card from "../card/Card"
import { Routes, Route, Switch, Redirect } from "react-router-dom";

const CustomRouter = (props) => {
  return (
    <Routes>
      <Route path="/sign" element={<SignInSide />}>
        Sign In
      </Route>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="*" element={<Home />}>
        Home
      </Route>
      {/*<Route path="/Browse" element={<Browse />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
            <Route path="*" element={<Home />}></Route>*/}
    </Routes>
  );
};

export default CustomRouter;

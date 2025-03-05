import { Link, Outlet } from "react-router-dom";

function ContactUs() {
    return (
      <div>
        <h1>Hello!!!!</h1>
        <p>Welcome to the Contact Us page</p>
        <Link to="dummy1">Dummy1</Link>
        <Link to="dummy2">Dummy2</Link>
        <Link to="dummy3">Dummy3</Link>
        <Outlet />
      </div>
    );
  }
  export default ContactUs
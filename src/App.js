// eslint-disable-next-line
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import { BrowserRouter as Router, useLocation ,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { useEffect } from "react";
import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.jsx";
import JobOpenings from "./Pages/JobOpenings.jsx";
// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null,
//     };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({
//       hasError: true,
//       error: error,
//       errorInfo: errorInfo,
//     });

    // You can also log the error to an error reporting service
    // or perform any other necessary error handling steps here
  //   console.error(error, errorInfo);
  // }

//   render() {
//     if (this.state.hasError) {
//       // Render your custom fallback UI here
//       return <h1>Something went wrong. Please try again later.</h1>;
//     }

//     return this.props.children;
//   }
// }

function App() {
  const helmetContext = {};

  function ScrollToTop(props) {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return <>{props.children}</>;
  }

  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Router>
          
            
            <ScrollToTop>
            <Routes>
            <Route path="/" element={<Home />} />
            
            <Route element={<Login />} path="/login" />
            
            <Route element={<Signup />} path="/signup" />
            <Route element={<JobOpenings/>} path ="/jobs" />
            </Routes>
            </ScrollToTop>
          
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;

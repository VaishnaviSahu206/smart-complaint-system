import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIAnalysis from "./pages/AIAnalysis";
import Login from "./pages/Login";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintList from "./pages/ComplaintList";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {

  return (

    <BrowserRouter>

   <Navbar />

      <Routes>
        <Route
        path="/signup"
        element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={<ComplaintForm />}
        />

        <Route
          path="/complaints"
          element={<ComplaintList />}
        />
<Route
   path="/ai"
   element={<AIAnalysis />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
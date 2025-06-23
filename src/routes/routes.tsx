import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About/About";
import BrowseListings from "@/pages/BrowseListing/BrowseListings";
import ProductDetailsPage from "@/pages/ProductDetails/ProductDetails";
import Login from "@/pages/Auth/Login/Login";
import Register from "@/pages/Auth/Register/Register";
// Protected route component
// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { isAuthenticated, isLoading } = useAuth();

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-escapigo-dark">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-escapigo-orange"></div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <>{children}</>;
// };

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/browse-listings" element={<BrowseListings />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes */}
      {/* <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />*/}

      {/* 404 - Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

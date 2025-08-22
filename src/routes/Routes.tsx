import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "../layout/mainLayout";
import { CompleteOrder } from "../pages/CompleteOrder";
import HomePage from "../pages/Home";
import OrderConfirmed from "../pages/OrderConfirmed";

export  function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/order" element={<CompleteOrder />}/>
        <Route path="/orderConfirmed" element={<OrderConfirmed />}/>
        <Route path="*" element={<h2>Página não encontrada!</h2>}/>
      </Route> 
      </Routes>     
    </BrowserRouter>
  )
}


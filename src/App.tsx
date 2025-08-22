import { CartProvider } from "./hooks/CartProvider";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <div>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;

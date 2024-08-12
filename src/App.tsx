import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Suspense, lazy } from "react"

// Use the lazy function to create the Dashboard component
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Products = lazy(() => import("./pages/Products"))
const Customers = lazy(() => import("./pages/Customers"))
const Transactions = lazy(() => import("./pages/Transactions"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transactions" element={<Transactions />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;


import {Routes, Route} from 'react-router'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/products"
      element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      }
    />
    <Route
      path="/products/:id"
      element={
        <ProtectedRoute>
          <ProductItemDetails />
        </ProtectedRoute>
      }
    />
    <Route
      path="/cart"
      element={
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App

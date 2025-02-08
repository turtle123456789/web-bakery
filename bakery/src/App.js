import { Route, Routes } from "react-router"
import { routes } from "./utils/routes"
import 'swiper/css';
import ScrollToTop from "./Components/ScrollToTop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateQuantity } from "./redux/slices/cart";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("cartPaul")) || [];
    const quantity = cart.reduce((total,item)=> total+item.quantity,0)
    dispatch(updateQuantity(quantity))
  },[dispatch])

  return (
    <div className="App">
      <ScrollToTop /> {/* Khi chuyển trang sẽ cuộn lên đầu */}
      <Routes>
        <Route  path={routes.path} element={routes.element}>
            {routes.children.map((route,index)=>{
              return (
                <Route key={`route-${index}`} path={route.path} element={route.element}/>
              )
            })}
          </Route>
      </Routes>
    </div>
  )
}

export default App

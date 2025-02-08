import CartPage from "../../pages/CartPage/CartPage";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import DefaultPage from "../../pages/DefauldPage/DefaultPage";
import HomePage from "../../pages/HomePage/HomePage";
import ProductDetailPage from "../../pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../../pages/ProductPage/ProductPage";

export const routes = {
    path: "/",
    element: <DefaultPage />,
    children: [
        {
            path: "",
            element: <HomePage />,
        },
        {
            path: "product/:nameProduct",
            element: <ProductPage/>,
        },
        {
            path: "productDetail/:id",
            element: <ProductDetailPage />,
        },
        {
            path: "cart",
            element: <CartPage />,
        },
        {
            path: "checkout",
            element: <CheckoutPage/>,
        },
        {
            path: "contact",
            element: <ContactPage/>,
        }
        
    ]
};

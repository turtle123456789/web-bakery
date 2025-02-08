import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import CartProductComponent from '../../Components/CartProductComponent/CartProductComponent'
import { getAllProduct } from '../../services/productService';
import ToastComponent from '../../Components/ToastComponent';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [toasts, setToasts] = useState([]);
  const {nameProduct} = useParams()
  const symbol = ">"
  const fectProduct = async () => {
    try {
      const products = await getAllProduct()
      setProducts(products.data)
    } catch (error) {
      console.log('error', error)
    }
  }
    useEffect(() => {
      fectProduct()
    }, []);
  return (
    <div>
      <ToastComponent toasts={toasts} setToasts={setToasts}/>
      <div className='flex justify-center items-center'>
        <Link className='text-[11px] text-[#c4c4c4] mr-2' to ="/home">
          Home
        </Link>
        {symbol}
        <Link className='text-[11px] ml-2'>
          {nameProduct}
        </Link>
      </div>
      <div className='text-center mb-28'>
        <h1 className='text-[40px]'>
          {nameProduct}
        </h1>
        <div className='my-6'>
          <img src="https://www.paul-uk.com/media/catalog/category/Cake_Jan_2025_banner.jpg" alt="" />
        </div>
        <p className='text-sm'>At PAUL, we have a cake for every occasion. Explore our ra... <b className='underline'>Read More</b></p>
      </div>
      <div>
        <div>

        </div>
        <div>
        <div className="grid grid-cols-4 gap-1">
            {products.length > 0 ? (
              products.map((product, index) => (
                  <CartProductComponent
                    id={product._id}
                    img={product.image}
                    nameProduct={product.name}
                    price={product.price}
                    setToasts={setToasts}
                  />
              ))
            ) : (
              <p className="text-center col-span-4">There is no product.</p>
            )}
          </div>
        </div>
        <div className='text-center'>
          <h3 className='text-[22px]'>Best Cakes in London, UK</h3>
          <div className='text-sm'>
            <br />
            <p>We’ve been baking glorious cakes for almost 70 years now, and the range of PAUL cakes we offer today includes both French classics and more contemporary favourites, with plenty of French chic. All are tried, tested and loved by our customers, and available for delivery in London.  </p>
            <br />
            <p>Life is just better with cake, and no special or celebratory occasion – birthday, anniversary, retirement, reunion – is complete without a showstopping confection to share. Every PAUL cake is a little celebration and designed to add joy to your happy day. Our collection includes cakes that also make for delectable desserts, such as our elegant, creamy Strawberry Summer Cheesecake and Apricot Cheesecake, and our authentic French Strawberry or Raspberry Charlottes, filled with the lightest, smoothest Bavarian cream and generously topped with fresh berries.  </p>
            <br />
            <p>Fruity or chocolaty, creamy or nutty, there’s something for everyone, and any occasion, with our cake delivery in London. </p>
          </div>
          <br />
          <h3 className='text-[22px]'>Order Cake Online for Delivery</h3>
          <div className='text-sm'>
            <br />
            <p>Once you place your order, our expert bakers get to work to bake and decorate your cake, and our team of PAUL drivers will bring your order direct to your door.  Our London cake delivery service covers most London postcodes. All you need to do is make sure you place your order by noon on the day before you want your delivery to arrive. Then just leave the hard work to us..  </p>
            <br />
            <p>You can also request Click and Collect, to pick up your cake from your nearest PAUL bakery.  </p>
            <br />
            <p>Whether you’re celebrating a special occasion, sending a delicious surprise to someone you love, or you see cake as one of life’s little necessary, regular indulgences (we agree, by the way), we wish you a bon appétit.  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
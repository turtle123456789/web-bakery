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
          Trang chủ 
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
        <p className='text-sm'>Tại Paul Bakery, chúng tôi có những chiếc bánh hoàn hảo cho mọi dịp. Hãy khám phá... <b className='underline'>Đọc thêm</b></p>
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
              <p className="text-center col-span-4">Không có sản phẩm nào. </p>
            )}
          </div>
        </div>
        <div className='text-center'>
          <h3 className='text-[22px]'>Những chiếc bánh ngon nhất</h3>
          <div className='text-sm'>
            {/* <br />
            <p>We’ve been baking glorious cakes for almost 70 years now, a
              nd the range of PAUL cakes we offer today includes both French classics and m
              ore contemporary favourites, with plenty of French chic. All are tried, tested and 
              loved by our customers, and available for delivery in London.  </p> */}
            <br />
            <p>Cuộc sống chỉ đẹp hơn khi có bánh, và không có dịp đặc biệt hay lễ kỷ niệm nào – sinh nhật, kỷ niệm, nghỉ hưu, đoàn tụ – 
              là trọn vẹn nếu thiếu một món bánh tuyệt vời để chia sẻ. 
              Mỗi chiếc bánh PAUL là một lễ kỷ niệm nhỏ và được thiết kế để thêm niềm vui cho ngày vui của bạn. 
              Bộ sưu tập của chúng tôi bao gồm các loại bánh cũng có thể làm món tráng miệng ngon tuyệt, 
              chẳng hạn như Bánh phô mai dâu tây mùa hè và Bánh phô mai mơ thanh lịch, béo ngậy của chúng tôi,
               và Bánh Charlottes dâu tây hoặc mâm xôi Pháp chính hiệu của chúng tôi , chứa đầy kem Bavarian nhẹ nhất, 
               mịn nhất và phủ đầy quả mọng tươi.   </p>
            <br />
            <p>Hương trái cây hay sô cô la, kem hay hạt, chúng tôi đều có loại bánh phù hợp với mọi người và mọi dịp, với dịch vụ giao bánh tại TP. Hồ Chí Minh.  </p>
          </div>
          <br />
          <h3 className='text-[22px]'>Đặt bánh tại trang của chúng tôi </h3>
          <div className='text-sm'>
            <br />
            <p>Sau khi bạn đặt hàng, các thợ làm bánh chuyên nghiệp của chúng tôi sẽ bắt tay vào làm và trang trí bánh cho bạn, 
              và sau đó sẽ giao cho đơn vị vận chuyển mang đơn hàng của bạn đến tận nhà bạn. 
              Tất cả những gì bạn cần làm là đặt hàng, theo dõi đơn hàng của bạn và nhận hàng. 
              Hãy để chúng tôi lo phần việc khó khăn còn lại.    </p>
            <br />
            <br />
            <p>Cho dù bạn đang ăn mừng một dịp đặc biệt, gửi một món quà bất ngờ ngon lành đến người mình yêu 
              hay coi bánh ngọt là một trong những món ăn vặt cần thiết và thường xuyên trong cuộc sống (chúng tôi cũng đồng ý), 
              chúng tôi đều chúc bạn ngon miệng!    </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
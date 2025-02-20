import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { Rating } from "flowbite-react";
import { FaHeart } from "react-icons/fa";
import { Accordion } from "flowbite-react";
import QuantityComponent from '../../Components/QuantityComponent';
import { getProductById } from '../../services/productService';
import { formatPrice } from '../../utils/format';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../redux/slices/cart';
import ToastComponent from '../../Components/ToastComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import { addCart } from '../../services/cartService';

const ProductDetailPage = () => {
  const [choicePiece,setChoicePiece] = useState([false,false])
  const [productDetai,setProductDetai] = useState({})
  const [toasts, setToasts] = useState([]);
  const [quantity,setQuantity] = useState(1)
  const {id} = useParams()
  const useId = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  const symbol = ">"
  const updatePiece = (index) => {
    setChoicePiece(prev =>
      prev.map((_, idx) => idx === index) 
    );
  };
  const hanldAddProduct = async()=>{
    try {
        const cart = JSON.parse(localStorage.getItem("cartPaul")) || [];
        const existingProduct = cart.find(product => product.id === productDetai._id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ id:productDetai._id, img:productDetai.image, nameProduct:productDetai.name, price:productDetai.price, quantity: quantity });
        }
        if(useId){
          await addCart(useId, productDetai._id, quantity)
        }
        localStorage.setItem("cartPaul", JSON.stringify(cart));
        const newQuantity = cart.reduce((total,item)=> total+item.quantity,0) 
        dispatch(updateQuantity(newQuantity))
        const newToast = { id: Date.now(), content: "Add product success", typeToast: "success" };

        setToasts((prevToasts) => [...prevToasts, newToast]);
    } catch (error) {
        const newToast = { id: Date.now(), content: "Add product error", typeToast: "error" };
        setToasts((prevToasts) => [...prevToasts, newToast]);
    }
  }
  const fetchProduct = async(id)=>{
    const res = await getProductById(id)
    if(res.status==="success"){
      setProductDetai(res.data)
    }
  }
  useEffect(() => {
    fetchProduct(id)
  }, [id])
  
  return (
    <div>
       <ToastComponent toasts={toasts} setToasts={setToasts}/>
      <div className=''>
        <Link className='text-[11px] text-[#c4c4c4] mr-2'>
          Trang chủ
        </Link>
        {symbol}
        <Link className='text-[11px] ml-2'>      
          {productDetai.category}
        </Link>
      </div>
      <div className='flex px-[9px]'>
        <div className='w-[58%] pr-[44px]'>
          <div className='mb-5'>
            <img className='w-full' src={`/assest/cake/${productDetai.image}`} alt="" />
          </div>
          <div>
            <img className='w-full'  src={`/assest/cake/${productDetai.image}`}  alt="" />
          </div>
        </div>
        <div className='w-[42%]'>
          <h3 className='text-[22px] mb-5'>{productDetai.name}</h3>
          <div >
            <div className='flex'>
              <span className=''>{formatPrice(productDetai.price) }</span>
              <div className='text-xs flex gap-2 items-center ml-7 mb-[10px]'>
                <Rating size='xs'>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
                <span>(1)</span>
                <Link className='text-xs underline'>Đọc đánh giá</Link>
              </div>
            </div>
            <p className='text-xs'>Trong các lớp bánh của chúng tôi chứa một ... <Link className='text-xs font-bold underline'>Read More</Link></p>
            <div className='bg-[#f1efe9] p-5 my-4'>
              <div className='mb-5'>
                <h4 className=''>Kiểm tra tính khả dụng</h4>
                <p className='text-[13px] '>Đảm bảo rằng sản phẩm này có sẵn để giao hàng hoặc thu thập trong khu vực của bạn.</p>
              </div>
              <div>
                  <div className="flex justify-between gap-5 ">
                    <div className='min-w-[302px]'>
                      <input type="text" placeholder='Nhập mã bưu chính của bạn ở đây' className='text-xs h-full w-full pl-[18px]' />
                    </div>
                    <div className='w-[121px] h-[47px]'>
                      <button className='bg-black text-white text-xs w-full h-full'>KIỂM TRA</button>
                    </div>
                  </div>
              </div>
            </div>
            <div className='pt-3 pb-5 border-b'>
              <h4 className=''>Thông điệp bánh được cá nhân hóa miễn phí</h4>
              <p className='text-[13px] mb-5'><b>Lưu ý: Sản phẩm có chứa các loại hạt.</b> Thông điệp chân thành có thể tạo ra tác động đáng kể.</p>
              <div className='w-[165px] h-[36px]'>
                <button className='bg-black text-white text-xs w-full h-full '>Gửi một tin nhắn - MIỄN PHÍ</button>
              </div>
            </div>
            <div className=''>
              <div className=''>
                <h3 className='py-5'>Chọn một cỡ</h3>
                <div className='flex gap-4'>
                  <div className={`w-[120px] ease-in duration-500 cursor-pointer h-[40px] border border-gray-300 text-xs flex justify-center items-center  ${choicePiece[0]?"bg-black text-white":""} hover:text-white hover:bg-black`} onClick={()=>updatePiece(0)}>6-8 miếng</div>
                  <div className={`w-[120px] ease-in duration-500 cursor-pointer h-[40px] border border-gray-300 text-xs flex justify-center items-center  ${choicePiece[1]? "bg-black text-white":""} hover:text-white hover:bg-black `} onClick={()=>updatePiece(1)}>12-16 miếng</div>
                </div>
              </div>
              <div>
                <h3 className='py-5'>Số lượng</h3>
                <div className='flex justify-between items-end'>
                <QuantityComponent setQuantity={setQuantity}/>
                  <div onClick={()=>{hanldAddProduct()}}>
                    <ButtonComponent contentButton={`ADD TO BASKET - ${formatPrice(productDetai.price*quantity)}`}/>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <Link className='flex items-center text-xs'>
                  <FaHeart />
                  Thêm vào danh sách yêu thích 
                </Link>
                <div className='mt-7'>
                  <Accordion className='rounded-none'>
                  <Accordion.Panel className=''>
                    <Accordion.Title  className='hover:bg-black hover:text-white hover:rounded-none open:bg-black open:rounded-none open:text-white focus:ring-0 focus:shadow-none '>Mô tả</Accordion.Title>
                    <Accordion.Content className='text-xs'>
                      <p>A true French classic enjoyed since the 1600s, Millefeuille, otherwise known as a vanilla slice, translates as a thousand sheets, referring to the layers of the puff pastry used to make this irresistible dessert. For those with a sweet tooth, the puff pastry has been caramelised in sugar, making it deliciously crispy. Sandwiched between the layers of puff pastry is a rum-laced custard cream, making this cake something quite special. The cake is finished with a very thin layer of apricot jam for added sweetness and a delicate layer of white fondant icing. A firm favourite for occasions and get togethers, this simple but delicious cake can be personalised for that extra special touch.  Size: </p>
                      <p>6-8 servings - 9.3" x 6" (23.5cm x 15cm)</p>
                      <p>12-16 servings - 11.8" x 9.3" (30cm x 23.5cm)</p>
                      <p><b>Please note: this cake contains alcohol.</b></p>
                      <p>Add A Personal Message To Your Cake On a Separate Marzipan Plaque – character limit 25 (including space)</p>
                      <p>(Contains Almond and may contain other nuts)</p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel className=''>
                    <Accordion.Title  className='hover:bg-black hover:text-white hover:rounded-none open:bg-black open:rounded-none open:text-white focus:ring-0 focus:shadow-none '>Dinh dưỡng</Accordion.Title>
                    <Accordion.Content className='text-xs'>
                      <p>A true French classic enjoyed since the 1600s, Millefeuille, otherwise known as a vanilla slice, translates as a thousand sheets, referring to the layers of the puff pastry used to make this irresistible dessert. For those with a sweet tooth, the puff pastry has been caramelised in sugar, making it deliciously crispy. Sandwiched between the layers of puff pastry is a rum-laced custard cream, making this cake something quite special. The cake is finished with a very thin layer of apricot jam for added sweetness and a delicate layer of white fondant icing. A firm favourite for occasions and get togethers, this simple but delicious cake can be personalised for that extra special touch.  Size: </p>
                      <p>6-8 servings - 9.3" x 6" (23.5cm x 15cm)</p>
                      <p>12-16 servings - 11.8" x 9.3" (30cm x 23.5cm)</p>
                      <p><b>Please note: this cake contains alcohol.</b></p>
                      <p>Add A Personal Message To Your Cake On a Separate Marzipan Plaque – character limit 25 (including space)</p>
                      <p>(Contains Almond and may contain other nuts)</p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  {/* <Accordion.Panel className=''>
                    <Accordion.Title  className='hover:bg-black hover:text-white hover:rounded-none open:bg-black open:rounded-none open:text-white focus:ring-0 focus:shadow-none '>Allergens Present</Accordion.Title>
                    <Accordion.Content className='text-xs'>
                      <p>A true French classic enjoyed since the 1600s, Millefeuille, otherwise known as a vanilla slice, translates as a thousand sheets, referring to the layers of the puff pastry used to make this irresistible dessert. For those with a sweet tooth, the puff pastry has been caramelised in sugar, making it deliciously crispy. Sandwiched between the layers of puff pastry is a rum-laced custard cream, making this cake something quite special. The cake is finished with a very thin layer of apricot jam for added sweetness and a delicate layer of white fondant icing. A firm favourite for occasions and get togethers, this simple but delicious cake can be personalised for that extra special touch.  Size: </p>
                      <p>6-8 servings - 9.3" x 6" (23.5cm x 15cm)</p>
                      <p>12-16 servings - 11.8" x 9.3" (30cm x 23.5cm)</p>
                      <p><b>Please note: this cake contains alcohol.</b></p>
                      <p>Add A Personal Message To Your Cake On a Separate Marzipan Plaque – character limit 25 (including space)</p>
                      <p>(Contains Almond and may contain other nuts)</p>
                    </Accordion.Content>
                  </Accordion.Panel> */}
                  <Accordion.Panel className=''>
                    <Accordion.Title  className='hover:bg-black hover:text-white hover:rounded-none open:bg-black open:rounded-none open:text-white focus:ring-0 focus:shadow-none '>Đánh giá</Accordion.Title>
                    <Accordion.Content className='text-xs'>
                      <p>A true French classic enjoyed since the 1600s, Millefeuille, otherwise known as a vanilla slice, translates as a thousand sheets, referring to the layers of the puff pastry used to make this irresistible dessert. For those with a sweet tooth, the puff pastry has been caramelised in sugar, making it deliciously crispy. Sandwiched between the layers of puff pastry is a rum-laced custard cream, making this cake something quite special. The cake is finished with a very thin layer of apricot jam for added sweetness and a delicate layer of white fondant icing. A firm favourite for occasions and get togethers, this simple but delicious cake can be personalised for that extra special touch.  Size: </p>
                      <p>6-8 servings - 9.3" x 6" (23.5cm x 15cm)</p>
                      <p>12-16 servings - 11.8" x 9.3" (30cm x 23.5cm)</p>
                      <p><b>Please note: this cake contains alcohol.</b></p>
                      <p>Add A Personal Message To Your Cake On a Separate Marzipan Plaque – character limit 25 (including space)</p>
                      <p>(Contains Almond and may contain other nuts)</p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";
import heroBg from "../assets/hero-bg.png";
import veggiePattern from "../assets/bg-veggi.png";
import veggieBag from "../assets/veggie-bag.png";
import { MdArrowDropDown } from "react-icons/md";
import Header from "../component/Header";
import Footer from "../component/Footer";




const MainPage = () => {
  const categories = [
    { name: "Fruits", items: "20 Items", img: "fruits1" },
    { name: "Vegetables", items: "220 Items", img: "vegetables" },
    { name: "Strawberry", items: "10 Items", img: "strawberry" },
    { name: "Apple", items: "40 Items", img: "apple" },
    { name: "Orange", items: "23 Items", img: "orange" },
    { name: "Potato", items: "3 Items", img: "potato" },
    { name: "Carrot", items: "9 Items", img: "carrot" },
  ];

  const featuredProducts = [
    { name: "Redish 500g", price: "$2", oldPrice: "$3.99", img: "radish", category: "Vegetables" },
    { name: "Potatos 1kg", price: "$1", oldPrice: "$1.99", img: "potatoes", category: "Vegetables" },
    { name: "Tomatos 200g", price: "$0.30", oldPrice: "$0.99", img: "tomatoes", category: "Fruits" },
    { name: "Broccoli 1kg", price: "$1.50", oldPrice: "$2.99", img: "broccoli", category: "Vegetables" },
    { name: "Green Beans 250g", price: "$1", oldPrice: "$1.99", img: "beans", category: "Vegetables" },
  ];

  const bestDeals = [
    {
      id: 1,
      name: "Coffee 1kg",
      price: "$20",
      discount: "Save 10%",
      seller: "NestFood",
      expiresIn: "Expires in 3 Days",
      stock: 75,
      image: "../assets/coffee.png",
    },
    {
      id: 2,
      name: "Halal Sausage 350g",
      price: "$4",
      discount: "Best deal",
      seller: "NestFood",
      expiresIn: "Expires in 2 Days",
      stock: 50,
      image: "../assets/sausage.png",
    },
    {
      id: 3,
      name: "Green Tea 250g",
      price: "$3",
      discount: "Save 4%",
      seller: "NestFood",
      expiresIn: "Expires in 1 Day",
      stock: 30,
      image: "../assets/tea.png",
    },
    {
      id: 4,
      name: "Onion 1kg",
      price: "$0.50",
      discount: "Save 8%",
      seller: "NestFood",
      expiresIn: "Expires in 4 Days",
      stock: 90,
      image: "../assets/onion.png",
    },
  ];

  const dailyBestSellsProducts = [
    {
      id: 1,
      name: "Orange 1kg",
      price: "$2",
      oldPrice: "$3.99",
      image: "../assets/orange.png",
    },
    {
      id: 2,
      name: "Carrot 1kg",
      price: "$2",
      oldPrice: "$3.99",
      image: "../assets/carrot.png",
    },
    {
      id: 3,
      name: "Apple 1kg",
      price: "$2",
      oldPrice: "$3.99",
      image: "../assets/apple.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + cardsPerPage < featuredProducts.length) setStartIndex(startIndex + 1);
  };

  const sections = ["Top Sells", "Top Rated", "Trending Items", "Recently Added"];

  return (
    
   
    <main >
      <Header />
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-60 z-0"
          style={{
            backgroundImage: `url(${veggiePattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "860px",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full flex items-center justify-between">
          <div className="max-w-lg space-y-8 py-26 ml-[-178px]">
            <h1 className="text-5xl font-bold text-[#1d2a3b] leading-tight">
              Don’t miss our daily <br /> amazing deals.
            </h1>
            <p className="text-gray-500 text-lg">Save up to 60% off on your first order</p>
            <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-md shadow-sm">
              <div className="p-4 text-gray-400">
                <FaPaperPlane />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-2 py-3 focus:outline-none"
              />
              <button className="bg-green-500 text-white px-6 py-3">Subscribe</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 translate-x-[32%] -translate-y-[0px] z-10">
            <img src={veggieBag} alt="veggies" className="w-[650px] object-contain " />
          </div>
        </div>
      </section>

      {/* Explore Categories */}
      <div className="px-20 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Explore Categories</h2>
        <div className="flex items-center gap-3">
          <button onClick={handlePrev} className="p-2 rounded-full border hover:bg-gray-200 transition">
            <ChevronLeft />
          </button>
          <div className="grid grid-cols-4 gap-6 w-full">
            {categories.slice(startIndex, startIndex + 4).map((category, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-5 text-center group transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                <img src={`/assets/${category.img}`} alt={category.name} className="h-28 mx-auto rounded-xl shadow-md transition-transform duration-300 group-hover:-translate-y-2" />
                <h3 className="text-lg font-medium mt-3">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.items}</p>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="p-2 rounded-full border hover:bg-gray-200 transition">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-20 py-10">
        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="flex items-center gap-3">
          <button onClick={handlePrev} className="p-2 bg-gray-100 rounded-full hover:bg-gray-300">
            <ChevronLeft />
          </button>
          <div className="grid grid-cols-4 gap-5 w-full">
            {featuredProducts.slice(startIndex, startIndex + cardsPerPage).map((product, index) => (
              <div key={index} className="border p-4 rounded-lg hover:shadow-xl transition">
                <img src={`/assets/${product.img}.png`} alt={product.name} className="h-32 w-full object-contain mb-3" />
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-green-600 font-semibold">{product.price}</p>
                  <p className="line-through text-gray-400 text-sm">{product.oldPrice}</p>
                </div>
                <button className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-1 rounded mt-2 w-full">Add</button>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="p-2 bg-gray-100 rounded-full hover:bg-gray-300">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Hero Offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-6 lg:px-32 py-10">
        <div className="relative bg-orange-50 p-6 rounded-xl overflow-hidden flex items-center justify-between hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer" style={{ backgroundImage: `url('/assets/bg-veggi.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div>
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 text-xs rounded">Free delivery</span>
            <h2 className="text-2xl font-semibold mt-2">Free delivery over $50</h2>
            <p className="text-gray-500 mt-1">Shop $50 product and get free delivery anywhere.</p>
            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300">Shop Now →</button>
          </div>
          <img src="/assets/deliveryMan.png" alt="Delivery Man" className="h-40 md:h-52 object-contain" />
        </div>

        <div className="relative bg-green-50 p-6 rounded-xl overflow-hidden flex items-center justify-between hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer" style={{ backgroundImage: `url('/assets/bg-veggi.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div>
            <span className="bg-green-200 text-green-800 px-2 py-1 text-xs rounded">60% off</span>
            <h2 className="text-2xl font-semibold mt-2">Organic Food</h2>
            <p className="text-gray-500 mt-1">Save up to 60% off on your first order</p>
            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300">Order Now →</button>
          </div>
          <img src="/assets/fruits.png" alt="Fruits" className="h-40 md:h-52 object-contain" />
        </div>
      </div>

      {/* Daily Best Deals */}
      <section className="px-10 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Daily Best Sells</h2>
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Featured</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">Popular</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">New Added</button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {bestDeals.map((product) => (
            <div key={product.id} className="relative group p-4 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-300">
              <img src={product.image} alt={product.name} className="mx-auto mb-4" />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-1 py-1 rounded">{product.discount}</div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-1">Seller: {product.seller}</p>
              <p className="text-gray-600 mb-1">{product.expiresIn}</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${product.stock}%` }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Best Sells Sections */}
      <section className="px-10 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">Daily Best Sells</h2>
        <div className="grid grid-cols-5 gap-8">
          {sections.map((section) => (
            <div key={section}>
              <h3 className="text-xl font-semibold border-b-2 border-green-500 mb-4">{section}</h3>
              <div className="space-y-4">
                {dailyBestSellsProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-3 border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <img src={product.image} alt={product.name} className="w-full h-full px-4 object-cover" />
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">{product.price}</span>
                        <span className="line-through text-gray-400 text-sm">{product.oldPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="p-6 bg-green-100 rounded-xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Sign Up & Get 20% Off</h3>
            <input type="email" placeholder="Email Address" className="w-full p-2 mb-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" />
            <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-all duration-300">Sign Up</button>
          </div>
          
          

        </div>
        <Footer />
      </section>
     
    </main>
    
  );
};

export default MainPage;

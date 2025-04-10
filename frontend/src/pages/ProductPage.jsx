//import { useParams } from "react-router-dom";
import { Bookmark, Minus, Plus } from "lucide-react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ProductPage = () => {
  //const { id } = useParams();

  const product = {
    name: "Fresho! Strawberry",
    weight: "200 Grams",
    mrp: 139.73,
    price: 111.78,
    discount: "20%",
    images: [
      "/assets/products/straw1.jpg",
      "/assets/products/straw2.jpg",
      "/assets/products/straw3.jpg",
    ],
    mainImage: "/assets/products/straw-main.jpg",
  };

  const similarProducts = new Array(4).fill({
    name: "Strawberry - Ooty",
    weight: "200 Grams",
    price: 163.45,
    mrp: 215.07,
    image: "/assets/products/straw-similar.jpg",
  });

  return (
    <main>
        <Header />
            <div className="p-8 max-w-[1200px] mx-auto">
        
        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="flex gap-4">
            <div className="flex flex-col gap-4">
            {product.images.map((img, idx) => (
                <img
                key={idx}
                src={img}
                alt="Thumbnail"
                className="w-24 h-24 border rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
            ))}
            </div>
            <img
            src={product.mainImage}
            alt="Main Product"
            className="rounded-lg object-cover w-full max-h-[350px] transition-transform duration-500 hover:scale-105"
            />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
            <div>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-gray-500 mt-1">{product.weight}</p>
            <div className="mt-4 space-y-1">
                <p className="text-sm text-gray-400 line-through">
                MRP: ₹{product.mrp.toFixed(2)}
                </p>
                <p className="text-xl font-bold">Price: ₹{product.price}</p>
                <p className="text-green-600 text-sm font-medium">
                You Save: {product.discount} OFF
                </p>
                <p className="text-xs text-gray-500">(inclusive of all taxes)</p>
            </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-transform duration-300 hover:scale-105 text-sm font-medium">
                Add to basket
            </button>
            <button className="border px-4 py-3 rounded-lg hover:bg-gray-100 transition-transform duration-300 hover:scale-105">
                <Bookmark size={20} />
            </button>
            </div>
        </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6 border-b pb-2">
            Similar Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.map((product, idx) => (
            <div
                key={idx}
                className="border p-3 rounded-lg bg-white transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
            >
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
                <div className="mt-3">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.weight}</p>
                <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm font-semibold">₹{product.price}</p>
                    <p className="text-xs line-through text-gray-400">
                    ₹{product.mrp}
                    </p>
                </div>
                <div className="mt-3 flex items-center justify-between border rounded-md px-2 py-1 text-sm text-green-600 cursor-pointer hover:bg-green-50 transition">
                    <span>
                    <Minus size={14} className="inline" />
                    </span>
                    <span>Add</span>
                    <span>
                    <Plus size={14} className="inline" />
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    <Footer />
    </main>
    
  );
};

export default ProductPage;

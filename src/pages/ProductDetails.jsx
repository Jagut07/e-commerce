import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  // Static product data (same as in Products.jsx)
  const products = [
    {
      id: 1,
      title: "I Phone 16 Pro Max ",
      price: 180000,
      image: "https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280",
      description: "The iPhone 16 Pro Max features cutting-edge performance, a stunning display, and advanced camera capabilities in a sleek, premium design.",
    },
    {
      id: 2,
      title: "Dell Laptop",
      price: 86000,
      image: "https://tse1.mm.bing.net/th?id=OIP.ESyQGzi1NEps4needopPpwHaFL&pid=Api&P=0&h=180",
      description: "A laptop is a portable, all-in-one computing device designed for productivity, entertainment, and mobility.",
    },
    {
      id: 3,
      title: "LED TV",
      price: 25000,
      image: "https://tse4.mm.bing.net/th?id=OIP.08t9rIDZNxqc1Q01rnWgJwHaHB&pid=Api&P=0&h=180",
      description: "An LED TV delivers vibrant visuals and energy-efficient performance with sleek, modern design.",
    },
    {
        id: 4,
        title: "Godrej Fridge",
        price: 16000,
        image: "https://img1.gadgetsnow.com/gd/images/products/additional/original/G46597_View_2/electronics/refrigerator/godrej-225-l-4-star-direct-cool-single-door-refrigerator-rd-edge-duo-225-pd-inv4-2-erica-blue-.jpg",
        description: "A fridge is an appliance that keeps food and drinks cool by maintaining a low temperature to prevent spoilage.",
      },
      {
        id: 5,
        title: "Home Theater",
        price: 12000,
        image: "https://tse4.mm.bing.net/th?id=OIP.C_AaURlJdGyWIoeXQzgVYgHaHa&pid=Api&P=0&h=180",
        description: "A home theater is a setup of audio and visual equipment designed to provide an immersive movie-watching experience in a home environment.",
      },
      {
        id: 6,
        title: "Croma Ac",
        price: 15000,
        image: "https://www.eedesignit.com/wp-content/uploads/2016/07/air-conditioners.jpg",
        description: "An air conditioner (AC) is a device that cools and dehumidifies indoor air for comfort.",
      },
      {
        id: 7,
        title: "Washing Machine",
        price: 10000,
        image: "https://tse2.mm.bing.net/th?id=OIP.t_99pw45fGAatdQglLIRMAHaHa&pid=Api&P=0&h=180",
        description: "A washing machine is a home appliance that automatically cleans clothes by agitating them with water and detergent.",
      },
      {
        id: 8,
        title: "Whirpool Geyser",
        price: 8000,
        image: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/11/18/1430731-geyser-precautions.jpg",
        description: "A geyser provides instant hot water for bathing and household use with efficient heating technology.",
      },
      {
        id: 9,
        title: "Phillips Fan",
        price: 4000,
        image: "https://static.vecteezy.com/system/resources/previews/023/353/482/original/beautiful-ceiling-fan-png.png",
        description: "A fan circulates air to provide cooling and ventilation for comfort.",
      },
      {
        id: 10,
        title: "Ledway Tubelights",
        price: 1200,
        image: "http://cdn.shopify.com/s/files/1/1425/0242/products/product-image-842562553_1024x1024.jpg?v=1590703416",
        description: "Tubelights provide bright and energy-efficient illumination for homes and offices.",
      },
  ];

  // Find the product with the matching ID
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6">
      <h2 className="font-bold text-xl">{product.title}</h2>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-cover" />
      <p>{product.description}</p>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductDetail;

import React, { useState } from 'react';

const ProductInfo = () => {
  const product = {
    name: 'MuscleBlaze Mass Gainer XXL - 22 lbs',
    price: '₹ 5,499',
    oldPrice: '₹ 6,999',
    description: `MuscleBlaze Mass Gainer XXL is formulated for those who want to build a lean and muscular body. With a balanced blend of protein and carbohydrates, it helps in gaining muscle mass. Each serving contains a high calorie count to fuel your workouts and muscle growth.`,
    features: [
      'High-calorie gainer with 22 lbs of mass.',
      'Contains protein and carbohydrates for muscle gain.',
      'Ideal for lean muscle growth and intense workout support.',
      'Rich chocolate flavor for a delicious taste.',
    ],
    // Array of product images
    images: [
      'https://cdn.nutristar.in/products/images/muscleblaze-mass-gainer-xxl-22-lbs.jpg',
      'https://cdn.nutristar.in/products/images/muscleblaze-mass-gainer-side-view.jpg',
      'https://cdn.nutristar.in/products/images/muscleblaze-mass-gainer-ingredient-info.jpg',
    ],
    reviews: 25,
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]); // State to handle the main image

  return (
    <div className="container mx-auto py-8 px-4 lg:px-8">
      {/* Product Header */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2">
          {/* Main Product Image */}
          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2 mt-4 justify-center">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer border-2 ${
                  selectedImage === image
                    ? 'border-indigo-600'
                    : 'border-transparent'
                } rounded-md hover:border-indigo-400`}
                onClick={() => setSelectedImage(image)} // Set the main image on click
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

          <div className="flex items-center space-x-4 mb-4">
            <span className="text-2xl font-semibold text-indigo-600">{product.price}</span>
            <span className="text-lg line-through text-gray-500">{product.oldPrice}</span>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 mb-6">
            <button className="px-6 py-3 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-500 focus:outline-none">
              Add to Cart
            </button>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* Additional Actions */}
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
              Buy Now
            </button>
            <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Additional Product Details */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Description</h2>
        <p className="text-gray-600 leading-relaxed">
          MuscleBlaze Mass Gainer XXL is the ultimate product for building a bulkier physique.
          It is a high-calorie gainer that not only boosts muscle mass but also fuels long and intense workouts.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;

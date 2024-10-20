import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Small.css'; // Import your custom styles here

const MiniCarousel = () => {
  const navigate = useNavigate();

  // Redirect to home page if screen width is larger than 768px (tablet/desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        navigate('/'); // Redirect to the homepage
      }
    };

    // Check screen size on component mount
    handleResize();

    // Add resize event listener to handle window size change
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate]);

  // Using only online images for categories
  const categories = [
    { id: 1, name: 'Whey', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 2, name: 'Whey-Isolate', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 3, name: 'Gainers', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 4, name: 'Creatine', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 5, name: 'Pre-Workout', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 6, name: 'Omega3', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 7, name: 'BCAA-Aminos', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 8, name: 'Weight-Loss', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 9, name: 'Multi-Vitamins', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 10, name: 'Glutamine', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 11, name: 'Nitrix-Oxide', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
    { id: 12, name: 'Special Offer', imageUrl: 'https://cdn2.nutrabay.com/page_manager/homepage/20230331152451603448.png' },
  ];

  const handleCardClick = (categoryName) => {
    navigate(`/category/${categoryName}/vertical`);
    console.log("Category Name:", categoryName);
  };

  return (
    <div className="C">
      <div className="B">
        {categories.map((category) => (
          <div
            key={category.id}
            className="A"
            onClick={() => handleCardClick(category.name)}
          >
            <img src={category.imageUrl} alt={category.name} className="D" />
            <div className="E">
              {/* Add any caption text here if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCarousel;

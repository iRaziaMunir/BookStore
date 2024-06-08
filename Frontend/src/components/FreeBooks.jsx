import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FreeBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('list.json')
      .then(response => response.json())
      .then(data => {
        const freeBooks = data.books.filter(book => book.category === 'Free');
        setBooks(freeBooks);
      });
  }, []);

  // React Slick Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-10 py-4'>
        <div className='py-4'>
          <h2 className='text-4xl text-pink-400'>Our Free Books</h2>
          <p className='py-4'>Discover rare and collectible books for enthusiasts and collectors.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Slider {...settings}>
            {books.map(item => <Cards item={item} key={item.id} />)}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBooks;

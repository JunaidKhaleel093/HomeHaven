import React from "react";
import "./Review.css";

export default function Review() {
  return (
    <>
      <div className="reviews-section">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">CUSTOMERS REVIEW</h1>
        <div className="reviews">
          <div className="review-card">
            <img src="https://images6.alphacoders.com/133/thumbbig-1338629.webp" alt="Customer 1" />
            <p>
              <strong>Review by:</strong>
            </p>
            <h3>SHANKS</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              “Exceptional service and beautiful furniture. The chair set we
              purchased exceeded our expectations in both design and comfort.
              Will definitely shop here again!” - Shanks.
            </p>
          </div>

          <div className="review-card">
            <img src="https://sp.yimg.com/ib/th?id=OIP.rmiw23TAVMxatEZxN9Ih3AHaHa&pid=Api&w=148&h=148&c=7&dpr=2&rs=1" alt="Customer 2" />
            <p>
              <strong>Review by:</strong>
            </p>
            <h3>RYOMEN SUKUNA</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              “Absolutely thrilled with my new sofa! The quality is top-notch,
              and the delivery was right on time. It looks fantastic in my
              living room—highly recommend!” - Sukuna
            </p>
          </div>

          <div className="review-card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.s7i3BXI3IypTHOKrp4logwHaLR&pid=Api&P=0&h=180" alt="Customer 3" />
            <p>
              <strong>Review by:</strong>
            </p>
            <h3>GOJO SATURO</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              “I love my new dining table from HomeHaven! It's exactly what I
              was looking for—stylish, sturdy, and fits perfectly in my space.
              Great customer service too!” - Gojo 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

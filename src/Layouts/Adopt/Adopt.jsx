import React from "react";

const Adopt = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-amber-700 mb-6">
          Why Adopt from PawMart?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          At PawMart, we believe every pet deserves a loving home. When you
          adopt, you’re not just giving an animal a second chance—you’re also
          helping reduce overpopulation and supporting responsible pet care.
          <span className="font-semibold text-amber-600">
            Adopting means saving lives, spreading love, and gaining a loyal
            friend for life.
          </span>
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          <div className="bg-white p-6 rounded-2xl shadow-md ">
            <h3 className="text-xl font-semibold text-amber-700 mb-2">
              🐾 Save a Life
            </h3>
            <p className="text-gray-600">
              Thousands of pets are waiting in shelters. Your adoption gives
              them a new beginning.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-amber-700 mb-2">
              ❤️ Make a Difference
            </h3>
            <p className="text-gray-600">
              Choosing adoption over buying helps reduce unethical breeding and
              animal homelessness.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-amber-700 mb-2">
              🏠 Find True Companionship
            </h3>
            <p className="text-gray-600">
              Adopted pets are loyal, loving, and grateful — they’ll fill your
              home with joy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adopt;

import React from "react";
import Img1 from "../../assets/hero1.avif";
import Img2 from "../../assets/hero2.jpeg";
import Img3 from "../../assets/hero3.jpeg";
import Img4 from "../../assets/hero4.jpeg";

const Hero = () => {
  const heros = [
    {
      name: "Sarah Williams",
      role: "Dog Lover & Volunteer",
      img: Img1,
      story:
        "Sarah rescued Bella, a stray puppy, and now volunteers at the local shelter every weekend.",
    },
    {
      name: "David Miller",
      role: "Cat Dad",
      img: Img2,
      story:
        "David adopted Luna from PawMart in 2023. Now, he raises awareness about adopting senior cats.",
    },
    {
      name: "Emma Johnson",
      role: "Pet Caregiver",
      img: Img3,
      story:
        "Emma provides foster care to injured animals and helps them recover before adoption.",
    },
    {
      name: "Alex Brown",
      role: "Animal Advocate",
      img: Img4,
      story:
        "Alex runs a small community program that connects families with pets looking for homes.",
    },
  ];

  return (
    <div>
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-amber-700 mb-6">
          Meet Our Pet Heroes
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          These amazing people have opened their hearts and homes to pets in
          need. Their love and kindness inspire us every day.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {heros.map((hero, index) => (
            <div
              key={index}
              className="bg-amber-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={hero.img}
                alt={hero.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-amber-200 mb-4"
              />
              <h3 className="text-xl font-bold text-amber-700">{hero.name}</h3>
              <p className="text-sm text-amber-500 mb-3">{hero.role}</p>
              <p className="text-gray-600 text-sm">{hero.story}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;

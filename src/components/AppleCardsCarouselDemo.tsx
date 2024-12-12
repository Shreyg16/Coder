"use client";
// import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
// import GenAI from "../../public/images/genAI.jpeg"


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="border-t border-gray-500 " >
    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white mt-10 font-sans">
    Catch up on previous episodes
    </h2>
    <div className="w-full h-full py-20 ">
    <Carousel items={cards} />
    </div>
    </div>
  );
}

const data = [
  {
    category: "CoderPad",
   title:"Enhance your productivity",
    src: "https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-upscale-after.webp",
    content: "AI in the Hot Seat: How GenAI Is Changing the Cheating Game in Tech Hiring",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://www.piclumen.com/wp-content/uploads/2024/08/flux-ai-generated-6-images-on-Piclumen.webp",
    content: "AI in the Hot Seat: How GenAI Is Changing the Cheating Game in Tech Hiring",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://www.piclumen.com/wp-content/uploads/2024/08/flux-ai-generated-6-images-on-Piclumen.webp",
    content: "AI in the Hot Seat: How GenAI Is Changing the Cheating Game in Tech Hiring",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "AI in the Hot Seat: How GenAI Is Changing the Cheating Game in Tech Hiring",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "AI in the Hot Seat: How GenAI Is Changing the Cheating Game in Tech Hiring",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "AI in the Hot Seat: How GenAI Is Changing the Cheating Game in Tech Hiring",
  },
];

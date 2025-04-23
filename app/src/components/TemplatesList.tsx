import React from "react";
import TemplateItem from "./TemplateItem";

import image from "../assets/image.jpg";
import two from "../assets/hero.jpg";
import three from "../assets/suplements.jpg";

export default function TemplatesList() {
  const items = [
    {
      image: image,
      gallery: [1, 2, 3, 4],
      name: "Template",
      category: ["Fitness", "Business", "Lab"],
      type: ["square", "portrait", "story"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi itaque quos veritatis odio, sint animi ipsum! Optio, architecto tenetur magni eos aspernatur eum amet magnam explicabo officiis fuga praesentium!",
      link: "www.google.com",
      templatesNumber: 100,
    },
    {
      image: two,
      gallery: [1, 2, 3, 4],
      name: "Template",
      category: ["Fitness", "Business", "Lab"],
      type: ["square", "portrait", "story"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi itaque quos veritatis odio, sint animi ipsum! Optio, architecto tenetur magni eos aspernatur eum amet magnam explicabo officiis fuga praesentium!",
      link: "www.google.com",
      templatesNumber: 200,
    },
    {
      image: three,
      gallery: [1, 2, 3, 4],
      name: "Template",
      category: ["Fitness", "Business", "Lab"],
      type: ["square", "portrait", "story"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi itaque quos veritatis odio, sint animi ipsum! Optio, architecto tenetur magni eos aspernatur eum amet magnam explicabo officiis fuga praesentium!",
      link: "www.google.com",
      templatesNumber: 1000,
    },
    {
      image: two,
      gallery: [1, 2, 3, 4],
      name: "Template",
      category: ["Fitness", "Business", "Lab"],
      type: ["square", "portrait", "story"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi itaque quos veritatis odio, sint animi ipsum! Optio, architecto tenetur magni eos aspernatur eum amet magnam explicabo officiis fuga praesentium!",
      link: "www.google.com",
      templatesNumber: 1000,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-10 flex-wrap ">
        {items.map((item) => {
          return <TemplateItem item={item} />;
        })}
        {items.map((item) => {
          return <TemplateItem item={item} />;
        })}
        {items.map((item) => {
          return <TemplateItem item={item} />;
        })}
        {items.map((item) => {
          return <TemplateItem item={item} />;
        })}
      </div>
    </>
  );
}

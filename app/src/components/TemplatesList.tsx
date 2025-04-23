import React from "react";
import TemplateItem from "./TemplateItem";

import image from "../assets/image.jpg";

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
    },
    {
      image: image,
      gallery: [1, 2, 3, 4],
      name: "Template",
      category: ["Fitness", "Business", "Lab"],
      type: ["square", "portrait", "story"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi itaque quos veritatis odio, sint animi ipsum! Optio, architecto tenetur magni eos aspernatur eum amet magnam explicabo officiis fuga praesentium!",
      link: "www.google.com",
    },
    {
      image: image,
      gallery: [1, 2, 3, 4],
      name: "Template",
      category: ["Fitness", "Business", "Lab"],
      type: ["square", "portrait", "story"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi itaque quos veritatis odio, sint animi ipsum! Optio, architecto tenetur magni eos aspernatur eum amet magnam explicabo officiis fuga praesentium!",
      link: "www.google.com",
    },
  ];

  return (
    <>
      <div className="flex gap-10 flex-wrap ">
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

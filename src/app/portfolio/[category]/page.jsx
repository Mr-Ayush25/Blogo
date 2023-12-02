import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <section className="w-full">
      <h1 className="text-[#53c28b] text-4xl font-semibold capitalize">
        {params.category}
      </h1>
      <div className="flex flex-col items-start gap-20 py-10">
        <div className="flex my-2 md:my-16 flex-col gap-5 md:gap-20 md:items-center md:flex-row">
          <div className="flex flex-1 min-h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/7534211/pexels-photo-7534211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="About Img"
              className="object-cover md:object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-1 gap-3 flex-col">
            <h1 className="text-3xl font-medium">Hello There</h1>
            <p className="text-md font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              nostrum voluptatum! Sint nobis iusto perferendis illo labore?
              Repudiandae amet obcaecati maxime accusamus dolor pariatur,
              praesentium ipsum. Repellendus voluptate praesentium possimus.
            </p>
            <Button url="#" title="Show More" />
          </div>
        </div>

        <div
          className="flex gap-5 md:gap-20 md:flex-row
         md:items-center my-2 md:my-16 even:md:flex-row-reverse flex-col"
        >
          <div className="flex flex-1 min-h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/7534211/pexels-photo-7534211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="About Img"
              className="object-cover md:object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-1 gap-3 flex-col">
            <h1 className="text-3xl font-medium">Hello There</h1>
            <p className="text-md font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              nostrum voluptatum! Sint nobis iusto perferendis illo labore?
              Repudiandae amet obcaecati maxime accusamus dolor pariatur,
              praesentium ipsum. Repellendus voluptate praesentium possimus.
            </p>
            <Button url="#" title="Show More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

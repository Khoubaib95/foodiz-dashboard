import { Card } from "flowbite-react";

function CategoryCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div style={{ margin: "0.5rem", width: 300 }}>
      <Card imgAlt={name} imgSrc={image}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="text-clip overflow-hidden h-lg ">{description}</p>
      </Card>
    </div>
  );
}
export default CategoryCard;

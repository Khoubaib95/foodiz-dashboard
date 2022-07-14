import { Card } from "flowbite-react";
import Link from "next/link";

function FCard({
  name,
  _id,
  image,
}: {
  name: string;
  _id: string;
  image: string;
}) {
  return (
    <div className="max-w-xs mx-2" style={{ margin: "0.5rem" }}>
      <Card imgAlt={name} imgSrc={image}>
        <Link href={`/restaurant/${_id}`}>
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
        </Link>
      </Card>
    </div>
  );
}
export default FCard;

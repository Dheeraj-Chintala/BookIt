import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ExperienceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  isFeatured?: boolean;
}

const ExperienceCard = ({
  id,
  title,
  description,
  image,
  location,
  price,
  isFeatured,
}: ExperienceCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow relative group bg-gray-100 flex flex-col">
      {isFeatured && <div className="absolute top-4 left-4 z-10"></div>}

      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Make card content a flex column */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <Badge variant="secondary" className="shrink-0 bg-gray-300">
            {location}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Footer row pinned to bottom */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-sm text-muted-foreground">From </span>
            <span className="font-semibold text-lg">₹{price}</span>
          </div>
          <Button onClick={() => navigate(`/experience/${id}`)}>
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;

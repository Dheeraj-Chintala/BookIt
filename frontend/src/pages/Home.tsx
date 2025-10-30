import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Header from "@/components/Header";
import ExperienceCard from "@/components/ExperienceCard";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: experiences, isLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: api.getExperiences,
  });

  const filteredExperiences = experiences?.filter((exp) =>
    exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />

      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading experiences...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredExperiences?.map((experience, index) => (
              <ExperienceCard
                key={experience._id}
                id={experience._id}
                title={experience.title}
                description={experience.description}
                image={experience.image}
                location={experience.location}
                price={experience.price}
                isFeatured={index === 4}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;

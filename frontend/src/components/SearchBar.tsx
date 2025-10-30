import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="flex gap-2 w-full max-w-3xl mx-auto">
      <Input
        type="text"
        placeholder="Search experiences"
        className="flex-1 bg-gray-100 "
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBar;

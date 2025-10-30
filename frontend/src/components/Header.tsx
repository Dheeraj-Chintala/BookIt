import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import SearchBar from "@/components/SearchBar";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className="border-b bg-background sticky top-0 z-50 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <div className="bg-foreground text-background p-2 rounded-full">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold">highway</span>
            <span className="text-sm font-semibold">delite</span>
          </div> */}
                      <img src="/hwdlogo.png" className="h-10"></img>

        </Link>

        {/* Right: Search bar */}
        <div className="w-2/5">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
};

export default Header;

import { SearchForm } from "@/components/search-form";
import { useSidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { headerLinks } from "./custom/organisms/Header/constants";
import { logo } from "./assets/images";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4 justify-between">
          <div className="flex gap-3 items-center h-full">
             <button
          onClick={toggleSidebar}
        >
            <img src={logo} alt="logo" className="h-10 w-10 bg-cover mt-0.5 cursor-pointer" />
            </button>
            <h1 className="text-xl xl:text-2xl font-semibold"> 3% CodeCraft </h1>
          </div>

        <div className="lg:w-1/2 flex justify-around p-2 items-center">
          <div className="flex gap-2 font-semibold items-center">
            {
              headerLinks.map((link, index) => (
                <Link to={link.path} key={index} className={`py-2 ${index == 3 ? "px-4 mt-0.5" : "px-6"} hover:rounded-3xl hover:bg-gray-800 ease-transition`}>
                  {
                    link.title
                  }
                </Link>
              ))
            }
          </div>
        </div>
        <SearchForm className="" />
      </div>
    </header>
  )
}

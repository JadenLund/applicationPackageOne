import Header from "./Header";
import NavBar from "./NavBar";

export default function PageSetup() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <Header />
      </div>
    </div>
  );
}

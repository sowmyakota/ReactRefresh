import Button from "../components/Button";
import { GoGear, GoZap, GoSync, GoReport, GoRuby } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!");
  };
  return (
    <div>
      <div>
        <Button secondary outline className="mb-5" onClick={handleClick}>
          <GoGear />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoZap />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoSync />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoReport />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoRuby />
          Hide Ads!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

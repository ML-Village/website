import logo from "../assets/mlv logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-center gap-[65rem]">
      <img src={logo} className=" h-20" />
      <ul className="flex gap-7 items-center text-2xl text-gray-600">
        <li className="cursor-pointer">
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li className="cursor-pointer">
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </li>
        <li className="cursor-pointer">
          <FontAwesomeIcon icon={faDiscord} />
        </li>
      </ul>
    </div>
  );
}

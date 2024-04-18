import logo from "../assets/mlv logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Navbar() {
  return (
    <div>
      <div className="hidden sm:inline">
        <div className="h-24 flex items-center justify-center gap-[57.5rem]">
          <img src={logo} className=" h-20" />
          <ul className="flex gap-9 items-center text-3xl text-gray-600">
            <li>
              <a
                href="https://github.com/ML-Village"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/mlvillagexyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/8uanuZvHmd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="h-12 flex items-center justify-between px-9 ">
          <img src={logo} className="h-14" />
          <ul className="flex gap-9 items-center text-xl text-gray-600">
            <li>
              <a
                href="https://github.com/ML-Village"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/mlvillagexyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/8uanuZvHmd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import Icon from "./Icons.jsx";
import { socials } from "../data.js";

export default function SocialLinks() {
  return (
    <ul className="socials" aria-label="Social links">
      {socials.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
           

            aria-label={`${s.label} (opens in a new tab)`}
            title={s.label}
          >
            <Icon name={s.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}

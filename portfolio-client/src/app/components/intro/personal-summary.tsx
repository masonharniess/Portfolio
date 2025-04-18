import Card from "@/app/components/card/card";
import { roboto_bold, roboto_light } from "@/app/fonts/fonts";
import {faFlickr, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/app/components/button/icon-buttons/icon-button";

export default function PersonalSummary() {
  return (
    <Card
      title="Mason Harniess"
      titleClassName={roboto_bold.className}
      bodyClassName={roboto_light.className}
      icons={
        <>
          <IconButton
            href="mailto:contact@masonharniess.com"
            icon={faEnvelope}
            alt="Email me"
            target="_blank"
          />
          <IconButton
            href="https://github.com/masonharniess"
            icon={faGithub}
            alt="GitHub"
            target="_blank"
          />
          <IconButton
            href="https://www.linkedin.com/in/masonharniess/"
            icon={faLinkedinIn}
            alt="LinkedIn"
            target="_blank"
          />
          <IconButton
            href="https://www.flickr.com/photos/masonharniess/"
            icon={faFlickr}
            alt="Flickr"
            target="_blank"
          />
        </>
      }
    >
      A First-Class Honours graduate of Computer Science with industry experience
      in IT. Enthusiastic about computer systems, networks, and programming.
      Currently employed as a Support Technician at Keyence, leveraging
      technical skills to provide staff support and enhance operations
      through IT projects.
    </Card>
  );
}

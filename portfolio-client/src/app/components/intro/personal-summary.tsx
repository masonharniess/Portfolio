import Card from "@/app/components/card/card";
import { roboto_bold, roboto_light } from "@/app/fonts/fonts";

export default function PersonalSummary() {
  return (
    <Card
      title="Mason Harniess"
      titleClassName={roboto_bold.className}
      bodyClassName={roboto_light.className}
    >
      A First-Class Honours graduate of Computer Science with industry experience
      in IT. Enthusiastic about computer systems, networks, and programming.
      Currently working as an IT Support Technician at Keyence, utilizing technical
      skills to support staff and deliver added value through IT projects.
    </Card>
  );
}

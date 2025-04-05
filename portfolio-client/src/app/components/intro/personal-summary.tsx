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
      Currently employed as a Support Technician at Keyence, leveraging technical skills to provide staff support
      and enhance operations through IT projects.
    </Card>
  );
}

import Card from "@/app/components/card/card";
import {roboto_bold} from "@/app/fonts/fonts";

export default function ExperienceCard() {
  return (
    <Card
      title="Work Experience"
      titleClassName={roboto_bold.className}
      bodyClassName={roboto_bold.className}
    >
      <p>IT Support Technician</p>
      <p style={{color: "#EAEAF1B3", fontSize: 16}}>Aug. 2024—Present</p>
      <p>Teaching Assistant & Marker</p>
      <p style={{color: "#EAEAF1B3", fontSize: 16}}>Feb. 2024—March 2024</p>
      <p>Customer Service Assistant & Machine Operative</p>
      <p style={{color: "#EAEAF1B3", fontSize: 16}}>July 2022–Oct. 2022</p>
      <p>Assistant Solicitor & Administrative Assistant </p>
      <p style={{color: "#EAEAF1B3", fontSize: 16}}>Dec. 2019</p>
      <p>Kitchen Porter</p>
      <p style={{color: "#EAEAF1B3", fontSize: 16}}>June 2019–Sep. 2019</p>
    </Card>
  );
}
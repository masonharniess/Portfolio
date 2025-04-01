import {ReactElement} from "react";

export default function TestCard() {
  const content: ReactElement = <p> hello there my Qq name</p>;
  const isLoggedIn: boolean = true;

  return (
    <div>
      {isLoggedIn && content}
    </div>
  );
}
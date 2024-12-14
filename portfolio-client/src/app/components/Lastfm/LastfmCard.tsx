import {inknut_antiqua_bold} from "@/app/fonts/fonts";

export default function LastfmCard() {
  return (
    <div>
      <p className={inknut_antiqua_bold.className}>Last.fm</p>
      <p>Currently listening to...</p>
    </div>
  )
}
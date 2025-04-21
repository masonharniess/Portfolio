// To use, just put <AlternativeIcon /> in the icon property of a button

export default function AlternativeIcon() {
  return (
    <svg
      width="19"
      height="19"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2" // thicker stroke
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-github"
      style={{cursor: "none"}}
    >
      <title>GitHub</title>
      <path
        d="m20.249 5.025-7.897-2.962-.703 1.873L14.484 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7c0-1.02-.766-1.851-1.751-1.975zM10 17H6v-2h4v2zm6.5 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm3.5-7H4V7h16v4z"></path>
    </svg>

  );
}


const GITHUB_REPO = "https://github.com/Muskankr/OpenSourceMate";

export default function GitHubLink({
  children = "GitHub ↗",
  className = "",
}) {
  return (
    <a
      href={GITHUB_REPO}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

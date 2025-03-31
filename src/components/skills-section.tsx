import { AboutMe } from "@/data/aboutme";

interface SkillsSectionProps {
  aboutMe: AboutMe;
}

export function SkillsSection({ aboutMe }: SkillsSectionProps) {
  if (!aboutMe.skills) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="font-serif text-xl font-light tracking-wide">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {aboutMe.skills!.map((skill, index) => (
          <span
            key={index}
            className="text-sm text-zinc-600"
          >
            {skill}
            {index < aboutMe.skills!.length - 1 && " •"}
          </span>
        ))}
      </div>
    </div>
  );
} 
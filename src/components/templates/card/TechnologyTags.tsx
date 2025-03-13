
interface TechnologyTagsProps {
  technologies: string[];
}

export const TechnologyTags = ({ technologies }: TechnologyTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

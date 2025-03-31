import { ArrowUpRight } from "lucide-react";
import { Certification } from "@/data/certification";

export function CertificationEntry({ certification }: { certification: Certification }) {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2">{certification.date}</p>
        <h3 className="font-serif text-md mb-1">
          {certification.link ? (
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {certification.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            certification.title
          )}
        </h3>
        <p className="text-sm text-zinc-600 mb-1">{certification.issuer}</p>
        {certification.credentialId && (
          <p className="text-xs text-zinc-500 mb-2">Credential ID: {certification.credentialId}</p>
        )}
        {certification.description && (
          <p className="text-sm text-zinc-600">{certification.description}</p>
        )}
      </div>
    </div>
  );
} 
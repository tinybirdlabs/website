import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ProjectProps {
    title: string;
    description: string;
    href: string;
}

export function ProjectCard({ title, description, href }: ProjectProps) {
    return (
        <Link href={href} target="_blank">
            <Card className="p-6 hover:border-white">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </Card>
        </Link>
    );
}

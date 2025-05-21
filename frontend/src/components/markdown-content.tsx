"use client"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

interface MarkdownContentProps {
  readonly content: string
  readonly className?: string
}

export default function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <article className={cn("prose prose-slate max-w-none", className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}

import { Stack } from "@/shared/ui";
import { CallSupportLink } from "./call-support-link";
import { cn } from "@/shared/lib";
import type { FC, ReactNode } from "react";

interface SupportBlockProps {
  children: (Link: FC<{ className?: string }>) => ReactNode;
  className?: string;
}

export const SupportBlock: FC<SupportBlockProps> = ({ children, className }) => {
  return (
    <Stack align="center" className={cn("w-full", className)}>
      {children(CallSupportLink)}
    </Stack>
  );
};
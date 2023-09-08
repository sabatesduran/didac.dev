"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SocialLinksArray } from "@/lib/social-links";
import Link from "next/link";

export function FollowMe() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          Follow me
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SocialLinksArray.map((link) => (
          <DropdownMenuItem key={link.name}>
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-grow items-center gap-2"
            >
              {link.icon && <link.icon />} {link.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

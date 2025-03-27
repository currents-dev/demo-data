"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}

export function formatYear(year: number): string {
  if (year < 2000 || year > 9999) {
    return "Invalid year";
  }
  return `© ${year}`;
}

export function validateSocialLink(url: string): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default function Footer() {
  const formattedYear = formatYear(YEAR);

  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>{formattedYear}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}

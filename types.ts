import { LucideIcon } from "lucide-react";

export interface QRCodeItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  icon: LucideIcon;
  ctaText: string;
}

export interface CompanyInfo {
  name: string;
  logoSrc: string;
}
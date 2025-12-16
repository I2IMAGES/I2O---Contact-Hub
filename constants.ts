import { Globe, Briefcase, CalendarCheck } from "lucide-react";
import { QRCodeItem, CompanyInfo } from "./types";

/* 
 * IMPORTANT: Replace these placeholder URLs with your actual image URLs.
 * You can host your images on services like Imgur, AWS S3, or within your project's public folder.
 */
export const ASSETS = {
  // Generated SVG Data URI for "I2O" logo to ensure visibility and fast loading
  LOGO: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgcng9IjgwIiBmaWxsPSIjZmZmZmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxODAiPjx0c3BhbiBmaWxsPSIjMWQ0ZWQ4Ij5JPC90c3Bhbj48dHNwYW4gZmlsbD0iIzFlM2E4YSI+MjwvdHNwYW4+PHRzcGFuIGZpbGw9IiMxZDRlZDgiPk88L3RzcGFuPjwvdGV4dD48L3N2Zz4=", 
  
  // Generating real QR codes for visual demonstration
  // 1. Website (Black) -> https://i2o-main-site-th6l.bolt.host
  QR_WEBSITE: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://i2o-main-site-th6l.bolt.host&color=000000&margin=10",
  
  // 2. Portfolio (Blue - matching tailwind blue-700) -> https://portfolio.inward2onward.com
  QR_PORTFOLIO: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://portfolio.inward2onward.com&color=1d4ed8&margin=10",
  
  // 3. Booking (Dark Blue - matching tailwind blue-900) -> https://calendly.com/ej--33/clarity-audit
  QR_BOOKING: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://calendly.com/ej--33/clarity-audit&color=1e3a8a&margin=10" 
};

export const COMPANY_INFO: CompanyInfo = {
  name: "Inward2Onward Executive Coaching",
  logoSrc: ASSETS.LOGO,
};

export const QR_CODES: QRCodeItem[] = [
  {
    id: "website",
    title: "Visit Our Website",
    description: "Explore our philosophy and services.",
    imageSrc: ASSETS.QR_WEBSITE,
    icon: Globe,
    ctaText: "Scan to Visit",
  },
  {
    id: "portfolio",
    title: "View Portfolio",
    description: "Case studies and success stories.",
    imageSrc: ASSETS.QR_PORTFOLIO,
    icon: Briefcase,
    ctaText: "Scan to View",
  },
  {
    id: "booking",
    title: "Book a Session",
    description: "Schedule your consultation today.",
    imageSrc: ASSETS.QR_BOOKING,
    icon: CalendarCheck,
    ctaText: "Scan to Book",
  },
];
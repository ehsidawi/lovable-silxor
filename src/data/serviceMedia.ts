import infrastructure from "@/assets/enterprise-infrastructure-1536.webp";
import infrastructureSmall from "@/assets/enterprise-infrastructure-768.webp";
import security from "@/assets/identity-security-1536.webp";
import securitySmall from "@/assets/identity-security-768.webp";
import software from "@/assets/software-engineering-1536.webp";
import softwareSmall from "@/assets/software-engineering-768.webp";
import hardware from "@/assets/hardware-engineering-1536.webp";
import hardwareSmall from "@/assets/hardware-engineering-768.webp";

export type ServiceMedia = { src: string; small: string; alt: string };
export const infrastructureMedia: ServiceMedia = { src: infrastructure, small: infrastructureSmall, alt: "Illustrative enterprise server racks and organized network cabling" };
const securityMedia = { src: security, small: securitySmall, alt: "Illustrative cybersecurity and identity access review workstation" };
const softwareMedia = { src: software, small: softwareSmall, alt: "Illustrative software engineering workstation with code and interface designs" };
const hardwareMedia = { src: hardware, small: hardwareSmall, alt: "Illustrative embedded electronics bench with a circuit board and test instruments" };
export const serviceMedia: Record<string, ServiceMedia> = {
  cloud: infrastructureMedia, "managed-services": infrastructureMedia,
  identity: securityMedia, cybersecurity: securityMedia,
  "software-engineering": softwareMedia, "product-team": softwareMedia,
  "private-ai": infrastructureMedia, "hardware-engineering": hardwareMedia,
};
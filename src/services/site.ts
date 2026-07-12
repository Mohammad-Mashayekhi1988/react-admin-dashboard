export interface SiteInfo {
  siteName: string;
  logo: string;
}

export async function getSiteInfo(): Promise<SiteInfo> {
  return {
    siteName: "نام سایت",
    logo: "/favicon.svg",
  };
  //   const response = await fetch("/api/site");

  // return response.json();
}

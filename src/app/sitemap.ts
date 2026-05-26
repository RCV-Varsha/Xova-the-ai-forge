import { MetadataRoute } from 'next';
import { industries } from '@/data/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xova.in';

  const industryUrls = industries.map((industry) => ({
    url: `${baseUrl}/services/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/initiate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...industryUrls,
  ];
}

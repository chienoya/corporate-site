import { MetadataRoute } from 'next';
import nextConfig from '../next.config';

const basePath = nextConfig.basePath || '';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: `${basePath}/`,
    },
  };
}

import NextImage from 'next/image';
import nextConfig from '../../next.config';

const basePath = nextConfig.basePath || '';

export function Image(props: React.ComponentProps<typeof NextImage>) {
  return <NextImage {...props} src={`${basePath}${props.src}`} />;
}

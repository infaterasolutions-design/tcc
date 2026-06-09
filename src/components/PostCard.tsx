import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
  readTime?: string;
  isLoading?: boolean;
}

export default function PostCard({ title, category, date, imageUrl, slug, readTime, isLoading }: PostCardProps) {
  return (
    <Link href={`/post/${slug}`} style={{ display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none' }}>
      {/* Image wrapper — 4:5 portrait ratio */}
      <div style={{ width: '100%', paddingBottom: '125%', marginBottom: '1rem', backgroundColor: '#e5e5e5', position: 'relative', overflow: 'hidden' }}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="post-card-img"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Category label */}
      <span className="text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>
        {category}
      </span>
      {/* Title */}
      <h4 className="text-serif" style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.3, color: '#000', margin: 0, cursor: 'pointer' }}>
        {title}
      </h4>
      {/* Meta */}
      <span className="text-sans" style={{ fontSize: '0.6rem', color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.4rem' }}>
        {date}{readTime ? ` · ${readTime}` : ''}
      </span>
    </Link>
  );
}

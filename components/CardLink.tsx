export interface Props {
  description?: string;
  pathname?: string;
  title: string;
}

export default function CardLink({
  title,
  description = 'An external link description',
  pathname = '',
}: Props) {
  return (
    <a
      href={pathname}
      className="card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`font-display text-grey-50`}>
        {title} <span> -&gt; </span>
      </h2>
      <p className={`hover:text-grey-100`}>{description}</p>
    </a>
  );
}

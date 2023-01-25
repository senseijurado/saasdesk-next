export interface Props {
  description?: string;
  href?: string;
  title: string;
}



export default function Cards({ title, description, href }: Props) {
  return (
    <
      a href={href}
      className="card"
      target="_blank"
      rel="noopener noreferrer"
    
    >
      <h2 className={`font-display text-grey-50`}>
        {title} 
        <span> -&gt; </span>
      </h2>
      <p className={`hover:text-grey-100`}>{ description }</p>
    </a>
  );
}

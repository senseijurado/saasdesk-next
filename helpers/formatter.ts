// LOCAL INTERFACES: 
export interface Props
{
  style: string;
  currency: string;
  maximumFractionDigits?: number | string | undefined;
  minimumFractionDigits?: number | string | undefined;
}


export const DATE_FORMATTED = ( date: Date | string = new Date() ) =>
{
  return new Date( date ).toLocaleDateString( 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  } );
};

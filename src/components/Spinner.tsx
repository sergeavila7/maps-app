import cn from 'classnames';
/* eslint-disable-next-line */
interface SpinnerProps {
  size?: 'xs' | 'md' | 'lg';
}
export const Spinner = ({ size = 'md' }: SpinnerProps) => {
  const rootClassName = cn('animate-spin', {
    'h-2 w-2': size === 'xs',
    'h-5 w-5': size === 'md',
    'h-7 w-7': size === 'lg',
  });
  return (
    <div className={`animate-spin ${rootClassName}`}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <circle
          className='opacity-25'
          cx={12}
          cy={12}
          r={10}
          stroke='#60A5FA'
          strokeWidth={4}
        />
        <path
          className='opacity-75'
          fill='#60A5FA'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  );
};

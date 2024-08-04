interface ArrowRight {
  color: string;
}
export const ArrowRight = ({ color }: ArrowRight) => {
  return (
    <svg width="22" height="32" viewBox="0 0 66 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9001 95.5L0.600098 78.3L30.9001 48L0.600098 17.7L17.9001 0.5L65.4001 48L17.9001 95.5Z" fill={`var(--${color}-default)`}/>
    </svg>
  )
}
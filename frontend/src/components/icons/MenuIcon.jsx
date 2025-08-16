const MenuIcon = ({ width = 24, height = 24, color = 'currentColor' }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="1" fill={color}/>
    <circle cx="19" cy="12" r="1" fill={color}/>
    <circle cx="5" cy="12" r="1" fill={color}/>
  </svg>
);

export default MenuIcon;
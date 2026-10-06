const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:ring-offset-2 focus:ring-offset-slate-950';

  const variants = {
    primary:
      'border-cyan-400/60 bg-cyan-400/10 text-cyan-100 hover:border-cyan-300 hover:bg-cyan-400/20',
    secondary:
      'border-slate-700 bg-slate-900/80 text-slate-100 hover:border-slate-500 hover:bg-slate-800',
    ghost: 'border-transparent bg-transparent text-slate-200 hover:bg-slate-800/70',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;

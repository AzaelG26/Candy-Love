type ButtonProps = {
  children: React.ReactNode
  variant?: "solid" | "outline"
  onClick?: () => void
  href?: string
}

export default function Button({ children, variant = "solid", onClick, href }: ButtonProps) {
    const base = "px-8 py-3 rounded-full font-bold transition-all active:scale-95"
    const styles = {
        solid: "bg-primary text-on-primary shadow-md hover:shadow-lg",
        outline: "border-2 border-primary/20 text-primary hover:bg-primary hover:text-white"
    }

    if (href) {
       return (
        <a href={href} className={`${base} ${styles[variant]} flex items-center justify-center gap-2`}>
            {children}
        </a>
        )
    }
    return (
        <button onClick={onClick} className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    )
}
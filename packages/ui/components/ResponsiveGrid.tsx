import './ResponsiveGrid.css'

interface Props {
  children: React.ReactNode
  minItemWidth?: string
}

export const ResponsiveGrid = ({ children, minItemWidth }: Props) => {
  return (
    <div
      style={{ ['--minItemWidth' as any]: minItemWidth }}
      className="responsive-grid"
    >
      {children}
    </div>
  )
}

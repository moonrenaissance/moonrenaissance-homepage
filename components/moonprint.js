const MoonPrintIcon = props => {
    return (
        <svg 
        viewBox="0 0 32 32" 
        width={20}
        height={20}
        className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
        fill="currentColor" 
        stroke="none" 
        stroke-width="2" 
        stroke-linejoin="round">
            <defs>
                <pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse">
                    <path d="M 2 0 L 0 0 0 2" fill="none" stroke="#555" stroke-width="0.03125"/>
                </pattern>
            </defs>
            
            <rect id="js-grid" width="100%" height="100%" fill="url(#grid)" stroke="none" />
            <path d="M14 4 A12.5 12.5 0 1 0 28 22 A12.5 12.5 0 0 1 14 4" />
        </svg>
  )
}

export default MoonPrintIcon
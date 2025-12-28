const DS = (location) => {
    return (



        <svg xmlns='http://www.w3.org/2000/svg' className={location} width='256' height='256' viewBox='0 0 256 256'>
            {/* <!-- Aperture: 6 shutter blades inside a ring --> */}
            <defs>
                <style>{`
                    .ring {fill: none; stroke: #708090; stroke-width: 12; }
                    .blade {fill: #708090; }
                `}</style>
            </defs>

            {/* Outer ring */}
            <circle cx='128' cy='128' r='112' className='ring' />

            {/* Blades group (slight leftward rotation for dynamism) */}
            <g transform='rotate(-8 128 128)'>
                {/* Six identical blades rotated around center */}
                <g transform='translate(128,128)'>
                    {/* Blade shape: a slender triangle segment pointing inward */}
                    {/* You can tweak rOuter/rInner and thickness by adjusting coordinates */}
                    <path d='M 0 -84 L 36 -12 L 8 -8 Z' className='blade' />
                    <path d='M 72 -42 L 12 36 L 8 8 Z' className='blade' transform='rotate(60)' />
                    <path d='M 72 42 L -12 36 L -8 8 Z' className='blade' transform='rotate(120)' />
                    <path d='M 0 84 L -36 12 L -8 8 Z' className='blade' transform='rotate(180)' />
                    <path d='M -72 42 L -12 -36 L -8 -8 Z' className='blade' transform='rotate(240)' />
                    <path d='M -72 -42 L 12 -36 L 8 -8 Z' className='blade' transform='rotate(300)' />
                </g>
            </g>
        </svg>



    )
}
export default DS;
const Dot = ({dot, current}) => {
    const isActive = dot === current 
    return ( 
        <div className={`border-2 border-brightred w-4 h-4 rounded-full slugish-transition ${isActive ? 'bg-brightred' : ''}`}></div>
     );
}
 
export default Dot;
import ParticlesJs from "react-tsparticles";

export default React.memo(function Particles(params) {
    return <ParticlesJs {...params}/>
}, () => true)

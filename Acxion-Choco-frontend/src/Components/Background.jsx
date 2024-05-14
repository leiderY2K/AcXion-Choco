//import './Background.css';
import imagenes from "/src/assets/img/imagenes.js";

const Background = () => {
    return (
        <div>
            <div className="bg-gradient-to-tr h-120 w-full bg-cover bg-center from-emerald-100 to-green-300 relative flex justify-center items-center"
            >
                <img src={imagenes[0]} alt="Imagen de fondo"
                     className="w-full h-full object-cover absolute mix-blend-overlay"/>
                <div className="p-24 flex-1">
                    <h1 className="text-yellow-300 text-6xl font-bold"> AcXion Chocó...</h1>
                    <h2 className="text-yellow-200 text-3xl font-light">El momento es ahora</h2>
                </div>
            </div>
        </div>
    );
}

export default Background;

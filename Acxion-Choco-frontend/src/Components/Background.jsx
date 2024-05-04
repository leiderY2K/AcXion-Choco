//import './Background.css';
import imagenes from "/src/assets/img/imagenes.js";
//import imag from "/src/assets/img/atrato1.jpg";

const Background = () => {
    return (
        <div>
            <div className="bg-gradient-to-tr h-96 w-full bg-cover bg-center from-emerald-100 to green 300 h-96 w-full relative">
                <img src={imagenes[0]} alt="Imagen de fondo" className="w-full h-full object-cover absolute mix-blend-overlay" />
                <div className="p-24">
                    <h1 className="text-white text-6xl font-bold"> AcXion Chocó...</h1>
                    <h2 className="text-slate-300 text-3xl font-light">El momento es ahora</h2>
                </div>
            </div>
        </div>
    );
}

export default Background;

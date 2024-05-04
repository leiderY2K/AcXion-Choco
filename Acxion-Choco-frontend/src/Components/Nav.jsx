import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 py-4">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold">Logo</span>
            </div>
            <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-yellow-500 transition cursor-pointer"><Link spy={true} smooth ={true} to="/Home">Inicio</Link></li>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-yellow-500 transition cursor-pointer"><Link spy={true} smooth ={true} to="/History">Historia</Link></li>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-yellow-500 transition cursor-pointer"><Link spy={true} smooth ={true} to="/Allies">Aliados</Link></li>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-yellow-500 transition cursor-pointer"><Link spy={true} smooth ={true} to="/Icons">Iconos</Link></li>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-yellow-500 transition cursor-pointer"><Link spy={true} smooth ={true} to="/Contact">Contacto</Link></li>
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-yellow-500 transition cursor-pointer"><Link spy={true} smooth ={true} to="/About">Acerca de</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
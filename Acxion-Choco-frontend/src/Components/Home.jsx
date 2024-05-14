import Nav from "./Nav.jsx";
import Login from "./Login.jsx";

const Home = () => {
    return (
        <div className="bg-slate-950">
            <div
                className="bg-gradient-to-tr h-96 w-full bg-cover bg-center from-emerald-100 to-green-300 relative flex justify-center items-center"
                style={{ backgroundImage: "url(../src/img/atrato1.jpg)" }}>
                <section className="mr-80">
                    <h1 className="text-yellow-300 text-6xl font-bold"> AcXion Chocó...</h1>
                    <h2 className="text-yellow-200 text-3xl font-light">El momento es ahora</h2>
                </section>
                <aside className="ml-80">
                    <Login />
                </aside>
            </div>

        </div>
    );
};

export default Home;

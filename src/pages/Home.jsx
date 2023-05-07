import FormNameUser from "../components/Home/FormNameUser"
import './home.css'

const Home = () => {
    return (
        <div className="Home__Container">
            <img className="Home__PokeLogo--Image" src="../../image/poke-logo.png" alt="" />
            <h3 className="Home__Title">Hi Trainer! Ready to start your adventure?</h3>
            <main className="Home__Body">
            <p className="Home__Text">Enter your name to access your pokédex.</p>
            <FormNameUser/>
            </main>
            <img className="Home__AshAndFiends--Image" src="../../image/ash-friends.png" alt="" />
        </div>
    )
}

export default Home 
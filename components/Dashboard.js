import Image from "next/image"
import { ConnectButton } from "@rainbow-me/rainbowkit"
export default function Dashboard() {
    return (
        <div>
            <nav className="bg-gradient-to-r from-cyan-400 to-blue-400 p-5 border-b-2 flex flex-row justify-between items-center">

                <h1 className="py-4 px-4 font-bold text-1xl text-center" image={""}>Welcome using your dream creator!</h1>
            </nav>
        </div>
    )
}
import MyProfile from "./Components/MyProfile";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Next Blog",
	description: "Create by Dev-Naing Aung Zaw",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="dark:bg-slate-800">
				<Navbar />
				<MyProfile />
				{children}
			</body>
		</html>
	);
}

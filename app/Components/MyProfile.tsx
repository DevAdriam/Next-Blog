import Image from "next/image";
import profile from "../../public/images/Screenshot (9).png";
export default function MyProfile() {
	return (
		<section className="w-full mx-auto">
			<Image
				className=" w-[150px] h-[150px] border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
				src={profile}
				alt="myprofile"
				width={100}
				height={100}
				priority={true}
			></Image>
		</section>
	);
}

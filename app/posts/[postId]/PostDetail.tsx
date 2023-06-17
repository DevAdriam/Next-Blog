import getFormattedDate from "@/libs/getFormattedDate";
import { getPostData } from "@/libs/getPosts";
import React from "react";
import Link from "next/link";

type Props = {
	postId: string;
};

export default async function PostDetail({ postId }: Props) {
	const { title, contentHtml, date } = await getPostData(postId);

	const formatDate = getFormattedDate(date);
	return (
		<main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
			<h1 className="text-3xl mt-4 mb-0">{title}</h1>
			<p className="mt-0">{formatDate}</p>
			<article>
				<section dangerouslySetInnerHTML={{ __html: contentHtml }} />
				<p>
					<Link href="/"> back to home</Link>
				</p>
			</article>
		</main>
	);
}

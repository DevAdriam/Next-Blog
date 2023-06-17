import getSortedPostsData, { getPostData } from "@/libs/getPosts";
import React from "react";
import { notFound } from "next/navigation";
import PostDetail from "./PostDetail";
type Props = {
	params: {
		postId: string;
	};
};
export function generateStaticParams() {
	const posts = getSortedPostsData(); // deduped

	return posts.map((post) => {
		postId: post.id;
	});
}

export function generateMetadata({ params }: Props) {
	const { postId } = params;
	const posts = getSortedPostsData(); //deduped!
	const existPost = posts.find((post) => post.id === postId);

	if (!existPost) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: existPost.title,
	};
}

export default async function Post({ params }: Props) {
	const { postId } = params;
	const posts = getSortedPostsData(); //deduped!
	const existPost = posts.find((post) => post.id === postId);

	if (!existPost) {
		return notFound();
	}

	return <PostDetail postId={postId} />;
}

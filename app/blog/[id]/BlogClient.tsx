"use client";

import formatDate from "../../utils/formatDate";
import FloatingNavbar from "../../components/Navbar";
import Image from "next/image";

export default function BlogClient({ post }: { post: any }) {
    if (!post) {
        return (
            <div className="text-white p-10 text-center">
                Blog not found.
                <FloatingNavbar />
            </div>
        );
    }

    return (
        <div className="text-white">
            <div className="mx-[1.5rem] md:mx-[25rem] py-10">
                <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
                    {post.title}
                </h1>
                <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                    <p className="text-sm text-neutral-400">
                        {formatDate(post.publishedAt)} by {post.author.name}
                    </p>
                </div>

                {post.coverImage?.url && (
                    <div className="my-4 rounded-lg">
                        <Image
                            src={post.coverImage.url}
                            alt={post.title}
                            width={1200}
                            height={630}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <div
                    className="prose prose-invert max-w-none text-stone-300 leading-7"
                    dangerouslySetInnerHTML={{ __html: post.content?.html || "" }}
                />
            </div>
            <FloatingNavbar />
        </div>
    );
}

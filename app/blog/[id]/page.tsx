'use client';

import React, { useEffect, useState } from 'react';
import { Blogs as blogs } from "../../data/blog"
import slugify from 'slugify';
import formatDate from '../../utils/formatDate';
import "../../../public/content/text.mdx"
import FloatingNavbar from "../../components/Navbar";
import Image from 'next/image';

function CustomLink(props) {
  const href = props.href;
  if (href?.startsWith('#')) {
    return <a {...props} />;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
}

function Code({ children, className, ...props }) {
  const codeHTML = children;

  return (
    <pre
      className={`bg-gray-800 m-4 text-white p-4 rounded-lg overflow-x-auto scrollbar scrollbar-thumb-black scrollbar-track-gray-900 ${className}`}
      {...props}
    >
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    </pre>
  );
}

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg"
      width={props.width || 1200}
      height={props.height || 630}
      {...props}
    />
  );
}

function ConsCard({ title, cons }) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72-3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function createHeading(level) {
  return ({ children }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, className: 'title font-medium text-2xl tracking-tighter max-w-[650px] py-2' },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor text-2xl',
        }),
        children,
      ]
    );
  };
}

function ProsCard({ title, pros }) {
  console.log(title);
  
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Callout(props) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function CustomNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-gray-400 pl-4 my-4 italic">
      <div>{children}</div>
    </div>
  );
}

function SpanNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-2	">
      {children}
    </span>
  );
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  ConsCard,
  Callout,
  ProsCard,
  a: CustomLink,
  img: RoundedImage,
  code: Code,
  CustomNote,
  SpanNote
};

const MyPage = ({ params: paramsPromise }: { params: Promise<{ id: string }> }) => {
  const params = React.use(paramsPromise);
  const { id } = params;
  const [MdxComponent, setMdxComponent] = useState<React.ComponentType<{ components: typeof components }> | null>(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [coverImage, setCoverImage] = useState<string | null>(null);

  useEffect(() => {
    const blog_ = blogs.find((blog) => blog.id === parseInt(id || ""));
    setBlogTitle(blog_?.title || "");
    setPublishDate(blog_?.publishedAt || "");
    setCoverImage(blog_?.coverImage || null);
    console.log("Kenil", id);
    
    const loadFile = async () => {
      try {
        console.log(blog_?.filePath);
        
        const mdxModule = await import(`../../../public/content/${blog_?.filePath}`);
        setMdxComponent(() => mdxModule.default);
      } catch (error) {
        console.error(`Error loading the MDX file: ${error}`);
      }
    };

    if (blog_) loadFile();
  }, [id]);

  return (
    <div className=" text-white">
      <div className="mx-[25rem] py-10">
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">{blogTitle}</h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(publishDate)}
          </p>
        </div>
        {coverImage && (
          <div className="my-4 rounded-lg">
            <img
              src={coverImage}
              alt={blogTitle}
              width={1200}
              height={630}
              className="rounded-lg"
            />
          </div>
        )}
        <div>
          {MdxComponent ? (
            <MdxComponent components={components} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <FloatingNavbar />
    </div>
  );
};

export default MyPage;

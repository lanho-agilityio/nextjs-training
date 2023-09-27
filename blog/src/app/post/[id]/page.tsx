import Tag from '../../../components/Tag';

import Image from 'next/image';

import Link from 'next/link';
import { getPostDetail } from '../../../services/post';

const PostPage = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getPostDetail(id);

  return (
    <div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            {data.tag && (
              <Tag
                key={data.tag.id}
                title={data.tag.name}
                color={data.tag.color}
                href={`/category/${data.tag.name}`}
              />
            )}
          </div>
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {data.title}
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <Link
              className="flex items-center gap-3"
              href={`/author/${data.user.id}`}
            >
              <div className="relative h-10 w-10 flex-shrink-0 bg-gray-500 rounded-full" />
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  {data.user.name}
                </p>
                <time
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: '#6B7280'
                  }}
                >
                  {new Date(data.dateCreated).toDateString()}
                </time>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {data.imageBase64 && (
          <Image
            src={data.imageBase64}
            alt="Post Image"
            width={100}
            height={100}
            priority
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
              color: 'transparent'
            }}
          ></Image>
        )}
      </div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <article
          style={{ maxWidth: '768px', marginRight: 'auto', marginLeft: 'auto' }}
        >
          {data.content}
        </article>
      </div>
    </div>
  );
};

export default PostPage;

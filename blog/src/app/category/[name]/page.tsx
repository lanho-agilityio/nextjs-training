import { lazy } from 'react';
//Types
import { Tag } from '@/Ttypes/tag';
//Services
import { queryPostsByCategory } from '@/services/post';
import { getCategories } from '@/services/tag';
//Components
const PostList = lazy(() => import('@/components/PostList'));

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category: Tag) => {
    return {
      name: category.name
    };
  });
}

const CategoryPage = async ({
  params: { name }
}: {
  params: { name: string };
}) => {
  const data = await queryPostsByCategory(name);

  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight lg:text-5xl">
          {name.replace(/%20/g, ' ')}
        </h1>
        <p className="mt-1 text-gray-600">
          {data instanceof Error || data === undefined ? 0 : data.length}{' '}
          Articles
        </p>
      </div>
      <PostList
        data={data instanceof Error || data === undefined ? [] : data}
      />
    </div>
  );
};

export default CategoryPage;

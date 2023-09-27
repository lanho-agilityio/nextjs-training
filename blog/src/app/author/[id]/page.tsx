import PostList from '../../../components/PostList';
import { queryPostsByUser } from '../../../services/post';
import Loading from './loading';

const AuthorPage = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await queryPostsByUser(id);

  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full"></div>
        <h1 className="text-brand-primary mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
          {data.name}
        </h1>
        <p className="mx-auto mt-2 flex max-w-xl flex-col px-5 text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <PostList
        data={data instanceof Error || data === undefined ? [] : data.posts}
        user={data}
      />
    </div>
  );
};

export default AuthorPage;

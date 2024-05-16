import { Heading, Input } from '@/components';

export default function CreatePage() {
  return (
    <main>
      <Heading title="Create" description="Create a post here." />
      <Input name="Title" placeholder="Title" />
    </main>
  );
}

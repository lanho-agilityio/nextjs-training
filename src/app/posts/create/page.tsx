import { FilePicker, Heading, Input } from '@/components';

export default function CreatePage() {
  return (
    <main>
      <Heading title="Create" description="Create a post here." />
      <Input name="Title" placeholder="Title" />
      <Input name="Content" placeholder="Content" multiline rows={7} />
      <FilePicker accept="image/png, image/gif, image/jpeg">Upload Image</FilePicker>
    </main>
  );
}

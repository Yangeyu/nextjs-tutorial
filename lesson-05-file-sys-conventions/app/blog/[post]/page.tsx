import { use } from "react";

export default function PostPage({ params }: { params: Promise<{ post: string }> }) {
  const { post } = use(params);
  return (
    <div>
      Post Page {post}
    </div>
  );
}

/**/
import Link from "next/link";
import { client } from "../libs/client";

/*成果物タグのコンテンツをリスト表示する。*/
export default function Product ({ blog }) {
  return (
    <div>
      <ul> 
        {blog.map((blog) => (
          <li key={blog.id}> 
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*ここで検索タグに該当するコンテンツをfetchする*/
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog", contentId: "od8v9rygg" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
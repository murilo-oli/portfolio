import useSWR from "swr";

import Article from "../components/Article/Article";

const fetcher = async (url: string) => await fetch(url).then((res) => {
    console.log("resSuccess", res)
    return res.json()
}).catch(err => {
    console.log("resError", err)
});

export default function Posts() {
    const { data, error, isLoading } = useSWR(
        "https://dev.to/api/articles?username=akadot_",
        fetcher
    );

    if (error) console.log("POSTS ERROR", error)
    if (isLoading) console.log("POSTS Loading", isLoading)
    if (data) console.log("data", data)
    return (
        <section id="posts">
            <h1>POSTS</h1>
            {data && data.map((post : {id:number}) => {
                if(post.id == 926347){
                    return <Article articleId={post.id}/>
                }
            })}
        </section>
    );
}
import parse from 'html-react-parser'
import useSWR from "swr";


const fetcher = async (url: string) => await fetch(url).then((res) => {
    return res.json()
});

export default function Article({articleId}:{articleId:number}) {
    const { data, error, isLoading } = useSWR(
        `https://dev.to/api/articles/${articleId}`,
        fetcher
    );

    if (error) console.log("POSTS ERROR", error)
    if (isLoading) console.log("POSTS Loading", isLoading)
    if (data) console.log("data POST", data)
    return (
        <section >
            <h1>ARTICLE</h1>
            {data && parse(data.body_html)}
        </section>
    );
}
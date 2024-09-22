import useSWR from "swr";

const fetcher = async (url:string) => await fetch(url, {
    headers: {
        "api-key": import.meta.env.VITE_FOREM_API
    },
    method: "GET"

}).then((res) => {
    console.log(res)
    return res.json()});

export default function Posts(){
    const {data, error, isLoading} = useSWR(
        "<https://dev.to/api/articles/me>",
        fetcher
    );

    if(error) console.log("POSTS ERROR", error)
    if(isLoading) console.log("POSTS Loading", isLoading)
    if(data) console.log("data",data)
    return (
        <h1>POSTS</h1>
    );
}
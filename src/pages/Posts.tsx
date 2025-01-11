import useSWR from "swr";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// import Article from "../components/Posts/Article";

type PostContent = Partial<{ id: number, cover_image: string, title: string, tag_list: string[], description: string }>;

const fetcher = async (url: string) => await fetch(url).then((res) => {
    console.log("resSuccess", res)
    return res.json();
}).catch(err => {
    console.log("resError", err)
});

export default function Posts() {
    const [posts, setPosts] = useState<PostContent[]>([]);
    const { i18n } = useTranslation();
    const { data, error, isLoading } = useSWR("https://dev.to/api/articles?username=olidev_", fetcher);

    useEffect(() => {
        if (data) {
            const lang = i18n.language == "en-US" ? "english" : i18n.language;
            const filteredPosts = data.filter((item: PostContent) =>
                !item.description?.toLowerCase().includes(lang.toLowerCase())
            );
            
            setPosts(filteredPosts);
        }
    }, [data, i18n.language]);

    if (error) {
        console.error("Error fetching posts:", error);
        return <p>Error loading posts.</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <Title title="POSTS" />
            <PostContainer>
                {posts && posts.map((post: PostContent) => {
                    return (
                        <PostItem>
                            <section>
                                <p>{post.title}</p>
                                {post.tag_list?.map((tag, idx) => <span key={'tag' + idx} >{tag}</span>)}
                            </section>
                            <img src={post.cover_image} alt="abc" />


                            {/* <img src={post.cover_image} alt="cover" /> */}
                            {/* <Article articleId={post.id} /> */}
                        </PostItem>
                    )
                })}
            </PostContainer>
        </section>
    );
}

const PostContainer = styled.section`
    display:flex;
    flex-direction:column;
    row-gap: 1rem;
    margin-top: 2rem;
`;

const PostItem = styled.section`
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding:0.8rem 1rem;
    border-radius:0.8rem;
    background-color: rgba(68, 68, 68, 0.13);
    border: 1px solid #8b8b8b11;

    & img{
        width:5rem;
        height:5rem;
        border-radius:0.5rem;
        object-fit:cover;
        border:2px solid #50fa7a1f;
    }

    & p{
        font-weight:bold;
        font-size:1.2rem;
        margin-bottom:0.5rem;
    }

    & span{
        margin-right:0.3rem;
        font-size:0.7rem;
        padding:0.3rem 0.5rem;
        border-radius: 50rem;
        background-color: #50fa7a1f;
        color: #50fa7a;
    }

    &:hover p{
        color:#50fa7a88;
    }

     &:hover{
        border-color:#50fa7a1f;
     }
`;
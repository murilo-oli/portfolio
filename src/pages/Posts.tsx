import useSWR from "swr";
import styled from "styled-components";
// import Article from "../components/Posts/Article";

type PostStyleProps = {
    cover_img:string,
    color:string
}

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
        <section>
            <h1>POSTS</h1>
            <PostContainer>
                {data && data.map((post: { id: number, cover_image:string }) => {
                    return (
                        <PostItem cover_img={post.cover_image} color="purple"> 
                            <p>Post title</p> 
                            <span>Description trestesd fdsoçjifnaçsdfngdk vakdfnvçsdilHJGAFDHGASDFLJFVSÇL</span> 
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
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap:1rem;
    row-gap: 1rem;
`;

const PostItem = styled.section<PostStyleProps>`
    background-image: url(${props => props.cover_img});
    width:100%;
    height:15rem;
    border-radius:0.8rem;
    /* box-shadow: ${props => props.color} 0px 8px 24px; */
    box-shadow: #0b0331 0px 3px 8px;
    /* box-shadow: ${props => props.color} 0px 4px 16px, ${props => props.color} 0px 8px 32px; */

`;

//IDEA https://dribbble.com/shots/20802507-Blog-posts
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Header from "../../components/layouts/Header";
import NewComment from "@/components/NewComment";

export default function CommentPage() {


    const [comments, setComments] = useState([]);
    const [isNewComment, setIsNewComment] = useState(false);

    const fetchComments = async () => {
        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data);
        setIsNewComment(false);
        console.log(comments);
    }

    const removeComments = () => {
        setComments([]);
        setIsNewComment(false);
    }

    return (
        <>
            <Header />
            <div className="text-center m-auto justify-center mt-3">
                <h1 className="text-[2rem]">Comments Page</h1>
                <Button color="blue" onClick={fetchComments}>Get Comments</Button>
                <Button color="red" onClick={removeComments} className="ml-4">Remove</Button>
                <Button color="green" onClick={() => {
                    setIsNewComment(true);
                    setComments([]);
                }} className="ml-4">
                    Create A New Comment
                </Button>
                {
                    comments.map(comment => {
                        return (
                            <div key={comment.id} className="mt-3">
                                <h3>{comment.id} - {comment.text}</h3>
                                <hr />
                            </div>
                        )
                    })
                }
                {isNewComment && <NewComment />}
            </div>
        </>
    )
}

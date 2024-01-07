import "../App.css"
function Comment({commentText}) {
    return (<div>
        <div className="comment">
            <p>{commentText.score}</p>
            <p>{commentText.text}</p>
        </div>
    </div>  );
}

export default Comment;
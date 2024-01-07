import Form from "./Form";
import Comment from "./Comment";
import { useState } from "react";
function List() {
  const [commentList, setCommentList] = useState([]);

  const handleFormSubmit = (data) => {
    const updatedList = [...commentList, data];
    setCommentList(updatedList);
    console.log(updatedList);
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div>
        {commentList.map((comment, index) => {
          <div key={index}>
            <Comment commentText={comment} />
          </div>;
        })}
      </div>
    </div>
  );
}

export default List;

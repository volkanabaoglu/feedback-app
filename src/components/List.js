import Form from "./Form";

function List() {
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default List;

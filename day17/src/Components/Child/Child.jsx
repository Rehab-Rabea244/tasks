export default function Child({ data }) {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>University: {data.University}</p>
      <p>Department: {data.dep}</p>
      <p>City: {data.city}</p>
      
    </div>
  );
}
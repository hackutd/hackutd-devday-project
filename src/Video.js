import { useParams } from "react-router-dom";

export default function Video() {
  const { id } = useParams();

  return <div>{id}</div>;
}

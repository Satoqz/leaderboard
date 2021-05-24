import { useEffect } from "react";

interface Props {
  path: string;
}

export default function Redirect({ path }: Props) {
  useEffect(() => {
    window.location.href = path;
  }, []);
  return null;
}

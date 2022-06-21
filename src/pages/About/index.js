import { useUserContext } from "../../context/User";

export const About = () => {
  const { user } = useUserContext();

  return (
    <>
      <h1>About page</h1>
      <p>Hello {user.firstName}</p>
    </>
  );
};

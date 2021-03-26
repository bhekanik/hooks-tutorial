import { ChangeEvent, FC, useState, useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Card } from "./Card";
import { Row } from "./Row";

interface Props {
  setTitle: (newTitle: string) => void;
}

export const Greeting: FC<Props> = ({ setTitle }) => {
  const [name, setName] = useState<string>("Steve");
  const [surname, setSurname] = useState<string>("Rogers");
  const [width, setWidth] = useState<number>(window.innerWidth);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTitle(`${name} ${surname}`);
  }, [name, surname]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };

  return (
    <Card desc="Hooks" theme={theme}>
      <Row label="name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
      <Row label="width">{width}</Row>
    </Card>
  );
};

export default Greeting;

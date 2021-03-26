import { ChangeEvent, FC, useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Card } from "./Card";
import { Row } from "./Row";

export const Greeting: FC = () => {
  const [name, setName] = useState<string>("Steve");
  const [surname, setSurname] = useState<string>("Roger");
  const { theme } = useContext(ThemeContext);

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
    </Card>
  );
};

export default Greeting;

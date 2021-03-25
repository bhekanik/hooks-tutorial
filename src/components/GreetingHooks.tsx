import { ChangeEvent, FC, useState } from "react";
import { Card } from "./Card";
import { Row } from "./Row";

interface Props {
  name?: string;
}

export const Greeting: FC = () => {
  const [name, setName] = useState<string>("Steve");
  const [surname, setSurname] = useState<string>("Roger");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };

  return (
    <Card desc="Hooks">
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

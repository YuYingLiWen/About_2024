import { Button, FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const UseStateUseEffectExample = () => {
  const [userInput, setUserInput] = useState("");

  const onInputChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(userInput);
  };

  const printValue = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <FormControl sx={{ paddingTop: "10px" }}>
      <TextField id="test-ionput" label="Input" onChange={onInputChange} />
      <Button onClick={handleButtonClick}>Submit</Button>
    </FormControl>
  );
};

export default UseStateUseEffectExample;

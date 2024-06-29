import { Button } from "flowbite-react";
import * as React from "react";

function GamesButtonsBar(): JSX.Element {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-center container mt-[20px]">
      <Button
        className="uppercase m-auto mt-[20px] min-w-[200px]"
        color="purple"
      >
        Популярные
      </Button>
      <Button
        className="uppercase m-auto mt-[20px] min-w-[200px]"
        color="purple"
      >
        слоты
      </Button>
      <Button
        className="uppercase m-auto mt-[20px] min-w-[200px]"
        color="purple"
      >
        Настольные
      </Button>
      <Button
        className="uppercase m-auto mt-[20px] min-w-[200px]"
        color="purple"
      >
        Live Casino
      </Button>
    </div>
  );
}

export default GamesButtonsBar;

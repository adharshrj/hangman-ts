const HEAD = (
  <div
    className="w-[50px] h-[50px] top-[50px] right-[-10px] absolute border-[black] border-[solid] border-[10px] rounded-[100%]"
  />
);

const BODY = (
  <div
    className="w-[10px] h-[120px] bg-black absolute top-[100px] right-[10px]"

  />
);

const RIGHT_ARM = (
  <div
    className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-90px] rotate-[-30deg] origin-bottom-left"
  />
);

const LEFT_ARM = (
  <div
  className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[20px] rotate-[30deg] origin-bottom-right"
  />
);

const RIGHT_LEG = (
  <div
  className="w-[100px] h-[10px] bg-black absolute top-[200px] right-[-80px] rotate-[60deg] origin-bottom-left"
  />
);

const LEFT_LEG = (
  <div
  className="w-[100px] h-[10px] bg-black absolute top-[200px] right-[10px] rotate-[-60deg] origin-bottom-right"
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative p-5">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[30px] w-[10px] bg-black top-[20px] right-[10px] absolute" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h=[10px] w-[250px] bg-black" />
    </div>
  );
}

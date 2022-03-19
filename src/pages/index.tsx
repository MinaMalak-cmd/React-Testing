import { Counter } from "../Components/Counter";
import { Example2 } from "../Examples/Example2/Example2";

export default function Home() {
  return (
    <div>
      <h1>Hello React.js Testing Series Friends!!!</h1>
      {/* <Counter description="My Counter" defaultCount={9} /> */}
      <Example2 onMoney={(e: number) => console.log(e)} />
    </div>
  );
}

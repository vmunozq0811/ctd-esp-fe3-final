import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useCharStates();
  return (
    <main className={state.theme ? "light" : "dark"}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.list.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;

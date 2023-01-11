import Counter from '../components/Counter/Counter'

export const App = () => {
  return (
    <div>
      <h1>Стан компонента</h1>
      <Counter initialValue={10} />
    </div>
  );
};

// DM: this note the diff from the original code to see how I'm converting this to a reusable hook with usage example.

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
/* 

usage:

const Counter = () => {
  const [value, setValue] = React.useState(0);
  const lastValue = useDebounce(value, 500);

  return (
    <div>
      <p>
        Current: {value} - Debounced: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

// DM: we don't need this in NextJS because it's already pre-configured - the way each file in src/pages becomes a "route", this part is already done for us.
ReactDOM.createRoot(document.getElementById('root')).render(
  <Counter />
);

*/
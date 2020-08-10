import * as React from 'react';
import * as ReactDOM from 'react-dom';

function TestComponent() {
  const [count, setCount] = React.useState(0);

  const onClick = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Hello!</p>
      <p>count: {count}</p>
      <button type="button" onClick={onClick}>increment</button>
    </div>
  );
}

function RootComponent() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

function onDOMContentLoaded() {
  const renderElement = document.getElementById('js-root');

  if (renderElement !== null) {
    ReactDOM.render(<RootComponent />, renderElement);
  }
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);

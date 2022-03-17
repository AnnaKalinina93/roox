import PacmanLoader from 'react-spinners/ClipLoader';

function Loading(): JSX.Element {
  return (
    <div>
      <p>
        <PacmanLoader size={30} /> Loading...
      </p>
    </div>
  );
}

export default Loading;
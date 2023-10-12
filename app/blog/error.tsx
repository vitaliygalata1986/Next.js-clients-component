'use client';

function Error({ error }: { error: Error }) {
  // принимаем error, которій по факту является объектом error
  return <h1>Oops!!! {error.message}</h1>;
}

export default Error;

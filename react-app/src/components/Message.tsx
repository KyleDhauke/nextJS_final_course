
export default function Message() {
  const name = 'Kyle'
  if (name) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h2>Hello World</h2>
  }
}


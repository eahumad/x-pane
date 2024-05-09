function Example() {


  const haikus = [
`Yo nada tengo,
pero gozo de calma,
y del frescor`,

`Cae la primera nieve
luego se derrite
en rocío sobre el pasto`,

`Anoche cubrí
mis hijos dormidos
y el ruido del mar.`,

`Esta primavera en mi cabaña
Absolutamente nada
Absolutamente todo`,

`Cuando canta la cigarra,
cuando canta,
canta en coro
y el sol muere.`,

  ]

  const idx = Math.floor(Math.random() * haikus.length)

  return (
    <>
      <div id="example">
        {/* <p style={{whiteSpace: "pre-wrap"}}>{haikus[idx]}</p> */}
        <p className="animate-character">X-PANE</p>
      </div>
    </>
  )
}

export default Example
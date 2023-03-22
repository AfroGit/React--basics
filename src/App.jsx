import './App.css'

export default function App() {// Prefix lets you mark the main function in a file so that you can later import it from other files.
  return (//return keyword, you must wrap it in a pair of parentheses:
    <main>
       <h1>CARS WE LOVE!</h1>
      <img 
        src='https://picsum.photos/id/111/1100/900'
        alt='Must Be A Cadillac'/>
      <p>It was brash and it was loud – the 1940s put paid to the glumness of the ’30s and nowhere was that more obvious than in the cars we drove, which took a quantum leap in durability, performance, equipment and style.</p>
      <section>
        <img src='https://picsum.photos/id/133/200/300' alt='Age Aint NOthin But A Number'/>
      </section>
    </main>
  );
}

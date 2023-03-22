import './App.css'

export default function App() {// Prefix lets you mark the main function in a file so that you can later import it from other files.
  return (//return keyword, you must wrap it in a pair of parentheses:
    <main>
       <h1>Hello World!</h1>
      <img 
        src='https://picsum.photos/id/111/1100/900'
        alt='Must Be A Cadillac'/>
    </main>
  );
}

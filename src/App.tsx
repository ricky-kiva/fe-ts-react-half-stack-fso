interface HeaderProps {
  name: string
}

interface ContentData {
  name: string,
  exerciseCount: number
}

interface ContentProps {
  contents: ContentData[]
}

interface TotalProps {
  total: number
}

const Header = (props: HeaderProps) => (
  <h1>{props.name}</h1>
)

const Content = (props: ContentProps) => (
  <>
    {
      props.contents.map((c, i) => (
        <p key={i}>{c.name} {c.exerciseCount}</p>
      ))
    }
  </>
)

const Total = (props: TotalProps) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exerciseCount: 10
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts
    .reduce((sum, part) => (sum + part.exerciseCount), 0);
  
  return (
    <div>
      <Header name={courseName} />
      <Content contents={courseParts} />
      <Total total={totalExercises} />
    </div>
  )
}

export default App;

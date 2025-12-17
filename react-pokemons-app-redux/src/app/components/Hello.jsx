function Hello({ name, age, isActive = false }) {
  return (
    <div className="Hello" data-testid="hello-component">
      Hello my name is {name}, I'm {age} and my
      status is {isActive ? 'active' : 'inactive'} !!!!
    </div>
  );
}

export default Hello;
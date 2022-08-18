function ErrorComponent({error}){
    return (
      <div style={{'margin':'100px 100px','color':'red'}}>
        Error: - {error.message}
      </div>
    );
  }
export default ErrorComponent;
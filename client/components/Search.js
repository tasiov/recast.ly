var Search = () => {
  var searchHandler = () => {
    props.clickHandler(props.vidData);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}

window.Search = Search;

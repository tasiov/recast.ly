var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search searchClick={props.searchClick} keyDownSearch={props.keyDownSearch}/>
    </div>
  </nav>
);

window.Nav = Nav;

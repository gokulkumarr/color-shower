const ParentComponent = (props) => {
  return (
    <>
    <h3 className="header-text" style={{color: props.colorcode, borderBottom: `3px solid ${props.colorcode}`}}>{props.children}</h3>
    <div className="color-box-wrapper" style={{ background: props.colorcode }}></div>
    </>
  );
};

export default ParentComponent;

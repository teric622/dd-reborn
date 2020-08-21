import React from "react";


const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 10,
    width: "60%",
    backgroundColor: "	#D3D3D3",
    borderRadius: 50,
    margin: 50
  };

  const fillerStyles = {
    height: "100%",
    width: `25%`,
    backgroundColor: "#EE2C2C",
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

export default ProgressBar;

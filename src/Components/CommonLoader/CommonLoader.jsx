// common loader code are here check out below.....

import React from "react";

const CommonLoader = () => {
  // style write in internal this file......
  const styles = {
    loaderFrameStyle: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    loader: {
      border: "8px solid rgba(0, 0, 0, 0.3)",
      borderTop: "8px solid rgba(0, 0, 0, 1)",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      animation: "spin 1s linear infinite",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  };

  return (
    <div style={styles.loaderFrameStyle}>
      <div style={styles.loader}></div>
    </div>
  );
};

export default CommonLoader;

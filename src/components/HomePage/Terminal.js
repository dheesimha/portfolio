import React from "react";
import "./Terminal.css";

function Terminal() {
  return (
    <div className="terminal">
      <span className="terminal-intro">
        &gt; Complete the code below to know more about me
      </span>

      <form action="">
        <textarea
          name=""
          id=""
          cols="25"
          rows="1"
          spellCheck="false"
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          placeholder="enter 'who is dheemanth'"
        ></textarea>
      </form>
    </div>
  );
}

export default Terminal;

import React from 'react';
import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
// import 'codemirror/mode/Dockerfile/Dockerfile'
import { Controlled as ControlledEditor} from 'react-codemirror2'

const Editor = () => {

//   function handleChange(editor, value, data) {
//       onChange()
//   }
  return (
    <div className="editor-con">
        <div> Edit your Dockerfile </div>
        
        <ControlledEditor 

          options={{
            lineWrapping: true,
            lint: true,
            // mode: Dockerfile,
            theme: 'material',
            lineNumbers:true,
          }}
        />
        <button>save</button>
        <button>configure</button>
    </div>
  );
}

export default Editor;
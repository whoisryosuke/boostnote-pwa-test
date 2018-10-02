import React from "react";
import PropTypes from "prop-types";
import CSON from "cson-parser";
import brace from "brace";
import AceEditor from "react-ace";
import ReactMarkdown from "react-markdown";

import "brace/mode/markdown";
import "brace/theme/monokai";

import data from "../data.cson";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    const note = CSON.parse(data);
    this.state = {
      note: note.content
    };
  }

  onEditorStateChange: Function = editorState => {
    this.setState({
      editorState
    });
  };

  onChange = newValue => {
    this.setState({ note: newValue });
    // console.log("change", newValue);
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="App">
        <h3>Boostnote PWA</h3>
        <p>
          Grabs Boostnote CSON files from your cloud storage and allows you to
          browse and edit notes.
        </p>
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "50%" }}>
            <AceEditor
              mode="markdown"
              theme="monokai"
              onChange={this.onChange}
              value={this.state.note}
              name="MarkdownEditor"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
          <div
            className="LivePreview"
            style={{ width: "50%", display: "block" }}
          >
            <ReactMarkdown source={this.state.note} />
          </div>
        </div>
      </div>
    );
  }
}

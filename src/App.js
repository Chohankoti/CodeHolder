import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCheck } from '@fortawesome/free-solid-svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function App() {
  const [copied, setCopied] = useState(false);
  const textToCopy = `import React, { useState } from 'react';
import './App.css';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function App() {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'This is the text to be copied';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after a delay
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Title</h2>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <button className=>
            {copied ? (
              <>
                <FontAwesomeIcon icon={faCheck} /> Copied!
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faClipboard} /> Copy Code
              </>
            )}
          </button>
        </CopyToClipboard>
      </div>
      <div className="code-container">
        <pre className="code-holder">
          <code>
            {textToCopy}
          </code>
        </pre>
      </div>
    </div>
  );
}
`;

const handleCopy = () => {
  setCopied(true);
  setTimeout(() => setCopied(false), 1000); 
};

  return (
    <div className="container">       
      <div className="header">
        <h2>Title</h2>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <button className={`copy-button ${copied ? 'copied' : ''}`}>
            {copied ? (
              <>
                <FontAwesomeIcon icon={faCheck} /> Copied!
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faClipboard} /> Copy Code
              </>
            )}
          </button>
        </CopyToClipboard>
      </div>
      <div className="code-container">
        <pre className="code-holder">
          <code>
            {textToCopy}
          </code>
        </pre>
      </div>
    </div>    
  );
}

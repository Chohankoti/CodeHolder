import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCheck } from '@fortawesome/free-solid-svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function App() {
  const [copied, setCopied] = useState(false);
  const textToCopy = `import React from 'react'
  export default function Task1() {
    return (
      <div>Task1</div>
    )
  }
  `;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); 
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="flex items-center justify-between bg-gray-300 p-2 h-10 rounded-t-md">
        <h2>Title</h2>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <button className={`bg-transparent border-none cursor-pointer text-black text-base p-2 rounded transition-all duration-300 ${copied ? 'bg-opacity-10' : ''} hover:bg-opacity-10`}>
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
      <div className="rounded-b-md mt-0">
        <SyntaxHighlighter language="javascript" style={prism}>
          {textToCopy}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

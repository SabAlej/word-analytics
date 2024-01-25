import { useState } from 'react';
import Warning from './Warning';

function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState('');

  const handleChange = e => {
    let newText = e.target.value;
    const htmlTagPattern = /<\/?[^>]+(>|$)/g; // Regular expression to match HTML tags

    if (htmlTagPattern.test(newText) || newText.includes('@')) {
      newText = newText.replace(htmlTagPattern, '').replace('@', '');
      setWarningText('No HTML tags or "@" symbol allowed!');
    } else {
      setWarningText('');
    }

    setText(newText);
  };
  return (
    <div className='textarea'>
      <textarea
        value={text}
        className='textarea'
        onChange={handleChange}
        placeholder='Enter your text'
        spellCheck='false'
      />
      <Warning warningText={warningText} />
    </div>
  );
}
export default TextArea;

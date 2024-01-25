import TextArea from './TextArea';
import Stats from './Stats';
import { useState } from 'react';
import { FB_MAX_LENGTH, IG_MAX_LENGTH } from '../lib/constants';

function Container() {
  const [text, setText] = useState('');
  const stats = [
    { title: 'Words', number: text.split(' ').filter(word => word).length },
    { title: 'Characters', number: text.length },
    { title: 'Instagram', number: IG_MAX_LENGTH - text.length },
    { title: 'Facebook', number: FB_MAX_LENGTH - text.length },
  ];
  return (
    <main className='container'>
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
export default Container;

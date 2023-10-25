import {useState} from 'react'

const ConText = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };
  return (
    <div className='main'>
      <input type="text" value={text} onChange={handleChange} />
      <p>You are typing: {text}</p>
    </div>
  )
}

export default ConText

import { AKClsx } from '@utils';
import { Button, Input } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './AKClipBoard.module.css';
export const AKClipBoard = ({
  AKClipBoardCardClassname,
  AKInputClassname,
}) => {
  const [textToCopy, setTextToCopy] = useState(''); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = (text, result) => {
    if (result && text) {
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2500);
    } else {
      // Handle the error scenario
      alert('Failed to copy text. Please try again.');
      setCopyStatus(false)
    }
  };

  return (
    <>
      <div className={AKClsx(AKClipBoardCardClassname, 'flex gap-5')}>
        <div className='w-full'>
          <Input
            value={textToCopy}
            onChange={(e) => setTextToCopy(e.target.value)}
            placeholder="Type or paste text here..."
            className={AKClsx(styles.AKClipBoardInput)}
          />
        </div>
        <div>
          <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
            <Button
              className={AKClsx(styles.AKClipBoardBtn)}
            >Copy to Clipboard</Button>
          </CopyToClipboard>
        </div>
      </div>
      {copyStatus && <p className='mt-2 title-color'>Text copied to clipboard!</p>}
    </>
  )
}

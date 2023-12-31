import format from 'date-fns/format';
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItClass from '@toycode/markdown-it-class';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

import { MessageStreamTypes } from 'src/store/types';

import './styles.scss';

type Props = {
  message: MessageStreamTypes;
  showTimeStamp: boolean;
}

function MessageStream({ message, showTimeStamp }: Props) {

 const sanitizedHTML = markdownIt({ break: true, html: true })
  .use(markdownItClass, {
    img: ['rcw-message-img']
  })
  .use(markdownItSup)
  // .use(markdownItSanitizer)
   .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' }, omitLinks: [] })
  .render(message.text);
  return (
    <div className={`rcw-${message.sender}`} id={message.customId}>
      <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML.replace(/\n$/, '') }} />
      {showTimeStamp && <span className="rcw-timestamp">{format(message.timestamp, 'hh:mm')}</span>}
    </div>
  );
}

export default MessageStream;

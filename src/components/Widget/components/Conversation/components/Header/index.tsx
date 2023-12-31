const close = require("../../../../../../../assets/clear-button.svg") as string;
const twitter = require("../../../../../../../assets/twitter_icon.png") as string;
const share = require("../../../../../../../assets/share_icon.png") as string;
import { useEffect, useState } from "react";
import "./style.scss";

type Props = {
  title: string;
  subtitle?: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  showIconHeader: boolean;
  titleAvatar?: string;
  currentUrl?: string;
};

function Header({
  title,
  subtitle,
  toggleChat,
  showCloseButton,
  showIconHeader,
  titleAvatar,
  currentUrl,
}: Props) {

  const [uValue, setUValue] = useState("");
  const onClipboard = () => {
    if (currentUrl) {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => alert("Text copied!"))
        .catch(() => alert("Some errors occurred!"));
    } else {
      alert("Not have URL");
    }
  };
  useEffect(() => {
    if (currentUrl) {
      const params = new URLSearchParams(new URL(currentUrl).search);
      const value = params.get('u') ?? '';
      setUValue(value)
    }
  }, [currentUrl])

  return (
    <div className="rcw-header">
      {/* {showCloseButton && (
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      )} */}

      <h4 className="rcw-title">
        {titleAvatar && (
          <img src={titleAvatar} className="avatar" alt="profile" />
        )}
        <a className="title_link" href="https://chatm.ai" target="_blank">
          {title}
        </a>
        <div className={showIconHeader ? "rcw-buttons" : "disabled"}>
          <a
            href={`https://twitter.com/share?url=${uValue}`}
            className="rcw-icon-twitter"
            rel="nofollow noopener"
            target="_blank"
          >
            <img src={twitter} className="rcw-icon" alt="twitter" />
          </a>
          <button onClick={onClipboard} className="rcw-icon-out">
            <img src={share} className="rcw-icon" alt="share" />
          </button>
        </div>
      </h4>
    </div>
  );
}

export default Header;

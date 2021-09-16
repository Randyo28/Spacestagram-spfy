import { SocialDivStyle } from './ImagesStyle'
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'

import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share'

function SocialShare(props) {
  const shareUrl = 'https://spacestagram-spfy.vercel.app/'
  return (
    <>
      <h2>Share with your friends now!</h2>
      <SocialDivStyle>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <InstapaperShareButton url={shareUrl}>
          <InstapaperIcon size={32} round={true} />
        </InstapaperShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <EmailShareButton url={shareUrl}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </SocialDivStyle>
    </>
  )
}

export default SocialShare

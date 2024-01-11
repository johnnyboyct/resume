import './Share.css';

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';

import ShareIcon from './components/ShareIcon';

export interface IShareProps { }

export default function Share({ }: IShareProps) {
	const shareUrl = 'http://johm.org'
	const title = 'John Marczak'
	return (
		<div className='shareWrapper'>
			{/* <ShareIcon title='Linkedin' network="Linkedin" url={shareUrl} /> */}

			<div className='social-links'>
				<ul className='share'>
					<li>
						<ShareIcon text='Share by Email!' color='#7f7f7f'>
							<EmailShareButton
								url={shareUrl}
								subject={title}
								body='Johnm.org Inquiry'
							>
								<EmailIcon size={32} />
							</EmailShareButton>
						</ShareIcon>
					</li>
					<li>
						<ShareIcon text='Share on Linkedin!' color='#0077b5'>
							<LinkedinShareButton
								url={shareUrl}
								className='social-link__share-button'
							>
								<LinkedinIcon size={32} />
							</LinkedinShareButton>
						</ShareIcon>
					</li>
					<li>
						<ShareIcon text='Share on Facebook!' color='#0965fe'>
							<FacebookShareButton
								url={shareUrl}
								className='social-link__share-button'
							>
								<FacebookIcon size={32}  />
							</FacebookShareButton>
							<div>
								<FacebookShareCount url={shareUrl}>
									{count => count}
								</FacebookShareCount>
							</div>
						</ShareIcon>
					</li>
					<li>
						<ShareIcon text='Share on X!' color='#000000'>
							<TwitterShareButton
								url={shareUrl}
								title={title}
								className='social-link__share-button'
							>
								<XIcon size={32} />
							</TwitterShareButton>
						</ShareIcon>
					</li>
					<li>
						<ShareIcon text='Share on Telegram!' color='#25a3e3'>
							<TelegramShareButton
								url={shareUrl}
								title={title}
								className='social-link__share-button'
							>
								<TelegramIcon size={32} />
							</TelegramShareButton>
						</ShareIcon>
					</li>
					<li>
						<ShareIcon text='Share on Whatsapp!' color='#25d366'>
							<WhatsappShareButton
								url={shareUrl}
								title={title}
								separator=':: '
								className='social-link__share-button'
							>
								<WhatsappIcon size={32} />
							</WhatsappShareButton>
						</ShareIcon>
					</li>

					<li>
						<ShareIcon text='Share on Reddit!' color='#ff5700'>
							<RedditShareButton
								url={shareUrl}
								title={title}
								windowWidth={660}
								windowHeight={460}
								className='social-link__share-button'
							>
								<RedditIcon size={32} />
							</RedditShareButton>

							<div>
								<RedditShareCount url={shareUrl} />
							</div>
						</ShareIcon>
					</li>
				</ul>
			</div>
		</div>
	)
}

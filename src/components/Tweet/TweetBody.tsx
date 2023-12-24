import SectionHighlight from '@utils/SectionHighlight'
import Image from 'next/image'
import TweetFooter from './TweetFooter'
import * as Icons from './TweetIcons'

/* TweetBody is the main exported function for the collective Tweet function. It contains all sections of a Twitter post, leaving us with a template that can be filled to emulate the full function of a Twitter post. In the future, we'd love to imporve the TweetBody by parsing through the actual tweetBody data and being able to hyper link where @youarerad is tagged. */

interface TweetBodyTypes {
	userProfileImage: string
	userName: string
	userHandle: string
	isVerified?: boolean
	tweetId?: string | undefined
	tweetBody: string
	tweetTime: string
	tweetDate: string
	tweetLikes: string
	tweetRetweets: string
	tweetComments: string
}

type TwitterPostInput = {
	TwitterPostData: Array<TweetBodyTypes>
}

export default function TweetBody({ TwitterPostData }: TwitterPostInput) {
	return (
		<>
			{TwitterPostData.map((tweet) => (
				<SectionHighlight key={tweet.userName}>
					<div className="flex flex-col max-w-lg p-5 space-y-3 border rounded-xl">
						<div className="flex items-stretch justify-between">
							<div className="flex items-center">
								<a
									href={`https://twitter.com/${tweet.userHandle}`}
									className="w-12 h-12 rounded-full relative overflow-hidden outline-[#1d9bf0]"
								>
									<Image
										className="transition-all duration-150 rounded-full focus:brightness-90 hover:brightness-90"
										src={tweet.userProfileImage}
										alt=""
										layout="fill"
										objectFit="fill"
									/>
								</a>
								<a
									href={`https://twitter.com/${tweet.userHandle}`}
									className="flex flex-col ml-1.5 outline-[#1d9bf0] focus:bg-[#1d9bf0]/10"
								>
									<h1 className="flex items-center text-sm font-bold leading-5">
										{tweet.userName}
										{tweet.isVerified && (
											<span className="inline-flex ml-1">
												<Icons.Verified />
											</span>
										)}
									</h1>
									<h2 className="text-sm font-normal leading-5">@{tweet.userHandle}</h2>
								</a>
							</div>
							<a
								href={`https://twitter.com/${tweet.userHandle}/status/${tweet.tweetId}`}
								className=" outline-[#1d9bf0] focus:bg-[#1d9bf0]/10"
							>
								<Icons.TwitterLogo />
							</a>
						</div>
						{/* Tweet body */}
						<div className="flex flex-col">
							<p className="text-base max-w-prose">{tweet.tweetBody}</p>
						</div>
						<div>
							<a
								className="text-sm leading-5 hover:underline decoration-[#6b7280] focus:underline outline-none"
								href={`https://twitter.com/${tweet.userHandle}/status/${tweet.tweetId}`}
							>
								{tweet.tweetTime}
							</a>{' '}
							·{' '}
							<a
								className="text-sm leading-5 hover:underline decoration-[#6b7280] focus:underline outline-none"
								href={`https://twitter.com/${tweet.userHandle}/status/${tweet.tweetId}`}
							>
								{tweet.tweetDate}
							</a>
						</div>
						<TweetFooter
							tweetLikes={tweet.tweetLikes}
							tweetRetweets={tweet.tweetRetweets}
							tweetComments={tweet.tweetComments}
							tweetId={tweet.tweetId}
							userHandle={tweet.userHandle}
						/>
					</div>
				</SectionHighlight>
			))}
		</>
	)
}

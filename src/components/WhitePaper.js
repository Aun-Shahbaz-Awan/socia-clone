import React from 'react'

const WhitePaper = () => {
  return (
    <div className=' bg-[#2C225A]'>

      <div className='flex flex-col justify-center items-center'>
        <div className='text-[#00D5FF] font-medium'>Discover Our WhitePaper</div>
        <div className='text-4xl font-medium'>Discover Our WhitePaper</div>
        <div>Experience true ownership and control over your social media presence.</div>
        <div className='flex '>
          <div className='flex flex-col'>
            <h1>Virtual Reality Experiences</h1>
            <p>
              Immerse yourself in interactive and immersive virtual reality content. Create, share, and monetize your own virtual reality experiences.
            </p>
            <button>Learn More</button>

          </div>
          <div className='flex flex-col'>
            <h1>Whitepaper</h1>
            <p>
              This whitepaper presents the Socia's Token Decentralized Social Media Platform, a revolutionary social media ecosystem built on blockchain technology.
            </p>
            <button>Learn More</button>

          </div>

        </div>
        <div className='grid grid-cols-2'>
          <div className='flex justify-center items-center'>
            <div></div>
            <div className='flex flex-col justify-center items-center'>
              <p>Pre-Minting of Tokens for Controlled Supply</p>
              <p>To control the token price and avoid manipulation, we propose pre-minting 4 billion SOCIA tokens. This approach allows us to create a reserve to stabilize the token economy.</p>

            </div>

          </div>
          <div className='flex justify-center items-center'>
            <div></div>
            <div className='flex flex-col justify-center items-center'>
              <p>
                Locking and Vesting Mechanism to Prevent Price Manipulation</p>
              <p>We implement a locking and vesting mechanism for influential accounts to prevent immediate token cashing. This ensures a fair token distribution and a more stable ecosystem.</p>

            </div>

          </div>
          <div className='flex justify-center items-center'>
            <div></div>
            <div className='flex flex-col justify-center items-center'>
              <p>
                Liquidity Pool for Social Media Influencers</p>
              <p>To incentivize social media influencers, we create a liquidity pool with 50% of the total token supply. Influencers are rewarded based on their engagement levels and content quality</p>

            </div>

          </div>
          <div className='flex justify-center items-center'>
            <div></div>
            <div className='flex flex-col justify-center items-center'>
              <p>
                Dynamic Halving Schedule for Sustainable Growth</p>
              <p>Instead of a flat rate issuance, we adopt a dynamic halving schedule for the remaining 4 billion tokens. This strategy strikes a balance between early adopter incentives and sustainable growth.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default WhitePaper

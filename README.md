# TGC-16 Project 3

# Title: Art House

![alt text](./preview1.png)

URL to deployed app: https://endearing-bombolone-6cf159.netlify.app/

User Login: tayboonsiang90@gmail.com

User Password: rotiprata123

API URL tp backend: https://tgc16-project3-express.herokuapp.com/api/

URL to backend admin panel: https://tgc16-project3-express.herokuapp.com/

Admin Login: root

Admin Password: password

## Summary

There is more potential in unlocking liquidity for traditionally illiquid items. This project will focus on making a marketplace for fine art. Art is illiquid due to high prices, lack of storage skills by owners and an absence of an online global marketplace. 

Art onboarding will be a two step process - Step 1: Physical Fine Art will be sent to a custodian, and the custodian will update the platform to state user has ownership of the Fine Art, Step 2: The art can be sold as a whole in an online marketplace, or the art can be fractionalized and sold in an in-house exchange. 

The redemption process will be simple - The current owner can go to the custodian to retrieve the fine art from the vault. However, if the art has been fractionalized, 100% ownership of the art shares must be proven. This process will be a buy-out offer price process by the majority stakeholder, put to vote and only passes if it meets quorum specified. 

In the online marketplace, 1 selling format is allowed for users - Fixed Price Listings, where a user can sell at a Fixed Price. 

The concepts for this project are easily portable to the blockchain, with concepts such as fractionalization and tokenization. 

## User Stories

[Names taken from here.](https://en.wikipedia.org/wiki/Alice_and_Bob)
## Target audience group:
### Artists

Alice, 35 years old is an growing artist. She has a growing international fanbase who would love to support her. However, instead of directly donating to her, she would like to value add her fan base by giving them tokenized ownership of her art. 

-   Acceptance Criteria

1. Anyone can send their art to any art vault internationally and create a marketplace for their art.
2. Must be able to sell fractionalized pieces of art.
3. Must be able to state amount of shares and quantity and price.

## Target audience group:
### Art Sellers

Charlie, 35 years old, owns several expensive artpieces that he needs to sell, but it is tough to find a buyer because each individual artpiece is too expensive. 

-   Acceptance Criteria

1. Anyone can send their art to any art vault internationally and create a marketplace for their art.
2. Must be able to sell fractionalized pieces of art.
3. Must be able to state amount of shares and quantity and price.

## Target audience group:
### Art Collectors

Bob, 65 years old loves Van Gogh, but is unable to afford any single artpiece by this famous artist. He looks for fractionalized ownership options. 

-   Acceptance Criteria

1. Must be able to buy fractionalized pieces of art.
2. Must be able to sell fractionalized pieces of art.
3. Must be able to withdraw art fully once ownerhsip hits 100%. 

## Design

### Wireframe

The site went through several iterations of design while in production, the final wireframe is lost unfortunately.

# UX/UI

User Facing Side
Landing 
- Listing Detail (Fixed Price Listing)
Register
- (if success) Landing
- (if failure) Error Message

Balance

Your Listings

Cart

# FEATURES

User Authentication System
There must be a sign - up, login, logout system. 
Must be a secure process - CSRF, XSS protection, hashed passwords.

User
Any user can be a buyer or a seller.

# DATABASE SCHEMA

![alt text](./schema.png)
![alt text](./erd.png)

## Color Palette

The choice of color was primarily based on a light theme.

# TEST CASES
| #  | Description | Steps | Expected|
| ------------- | ------------- | ------------- | ------------- |
| 1 | Homepage must be able to load all markets  | Load Site, wait for markets to appear | The site comes pre-loaded with several markets (10) |
| 2 | Account creation is working correctly  | Click Register on the Navbar at the top, and fill in the fields as described. Check the ToS and click register. There should be validation informing you what went wrong with your registration if there is any. Otherwise it will inform you of success. | If the account creation process is done correctly, you will be logged in automatically. Go to account details to check if your details are the same as you filled in.  |
| 3 | Account login is working correctly  | If you came from #2, click logout on the navbar. Now click Login on the navbar. Fill in your email and password choosen in #2. | If the account login system is working correctly, you should be able to login with your email and password.  |
| 4 | Search Filter searches through the art correctly  | Search anything | There should be 10 markets unfiltered. |
| 5 | Filter Options are working correctly | Click the various filter options   | Check against the market displayed that the filter is working correctly |
| 6 | Check that you can buy  a market | Click trade on any art market and click buy shares for any price | Check if the shares have been credited on Portfolio tab in navbar, and check that the trade history appears at the bottom. Check that the market price and chart have changed correctly according to the parameters that appeared when you clicked the confirmation modal.  | 
| 7 | Check that you can sell a market | Click trade on any art market and click sell shares for any price, assuming that you own those shares | Check if the shares have been credited on Portfolio tab in navbar, and check that the trade history appears at the bottom. Check that the market price and chart have changed correctly according to the parameters that appeared when you clicked the confirmation modal.  | 
| 8 | Check that account dashboard is working | Click account details in navbar  | Your account details should be correct as shown |

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap v5
- React
- Font Awesome
- Google Fonts
- Postgres
- Axios
- Express
- Cors
- Cloudinary
- Stripe
- Handlebars
- Knex
- Bookshelf ORM
- db-migrate

## Used in production
- Visual Studio Code
- Git
- GitHub
- Netlify
- Heroku

## Deployment
Hosted on Netlify free plan. To deploy, fork this code, and link your Github account with Netlify. Use the following settings: 

Base directory: Not set

Build command: CI=false npm run build

Publish directory: build

## CREDITS AND ACKNOWLEDGMENT
- Visual Studio Code
- Git
- GitHub
- Netlify
- HTML5
- CSS3
- JavaScript
- Bootstrap v5
- Font Awesome
- Google Fonts
- Leaflet
- Leaflet Marker Clustering
- Apex Charts
- Axios
- Last but not least, Trent Global College and their excellent teacher, Paul.
- Also my wife.
- And Family

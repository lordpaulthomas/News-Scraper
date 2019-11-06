const mongoose = require("mongoose");
const db = require("./../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/news-scraper"
)

const articleSeed = [
  {
    "title": "India’s Defense Minister Touts Blockchain, AI Role in Warfare",
    "img": "https://static.coindesk.com/wp-content/uploads/2019/11/Indian-army-tanks-200x135.jpg",
    "p": "India's defense minister Rajnath Singh highlighted the potential use of blockchain technology in the defense industry on Monday."
  },
{
    "title": "UK Tax Authority Issues Crypto Guidance for Businesses",
    "img": "https://static.coindesk.com/wp-content/uploads/2019/11/UK-coins-200x135.jpg",
    "p": "After clarifying how individual taxpayers should deal with cryptos last year, the U.K.'s HMRC has now issued guidance for enterprises."
  },
{
    "_id": ObjectId("5dc056aecb03fe0efcbb78ab"),
    "title": "Bitcoin Outshines Gold for First Time Since June",
    "img": "https://static.coindesk.com/wp-content/uploads/2019/02/shutterstock_703031917-200x135.jpg",
    "p": "Bitcoin logged double-digit gains in October, outperforming gold for the first time for months."
  },
{
    "title": "This Startup’s Upgrade Code Can Be Used by Any Bitcoin-Based Blockchain",
    "img": "https://static.coindesk.com/wp-content/uploads/2019/10/P77A0018-200x135.jpg",
    "p": "Nexus says an upgrade that brings smart-contract functionality to its blockchain can also be used by any other bitcoin-based chain."
  },
{
    "title": "Bittrex Target of Latest $1 Million Crypto SIM Hack Lawsuit",
    "img": "https://static.coindesk.com/wp-content/uploads/2019/11/Sim_Card_Shutterstock-200x135.jpg",
    "p": "Gregg Bennett had never heard of SIM swapping before. Then, one night in April, he learned in the worst way one can."
  },
{
    "title": "After Painful 2018, Chinese Blockchain VCs Are Getting Back Into the Market",
    "img": "https://static.coindesk.com/wp-content/uploads/2018/10/Yuan-200x135.jpg",
    "p": "After the crypto market crash last year, Chinese venture capital firms are taking another look at blockchain."
  },
{
    "title": "Trial Back on After Craig Wright Breaks Bitcoin Settlement Agreement",
    "img": "https://static.coindesk.com/wp-content/uploads/2016/11/law-legal-e1478087988459-200x135.jpg",
    "p": "Craig Wright broke a non-binding settlement agreement to forfeit half his claimed bitcoin holdings, according to a court filing. "
  },
{
    "title": "FATF Releases Guidance on Global Digital IDs as Use Cases Grow",
    "img": "https://static.coindesk.com/wp-content/uploads/2016/05/Digital-Identity-200x135.png",
    "p": "The Financial Action Task Force wants financial institutions to prepare for the global expansion of digital identification systems. "
  },
{
    "title": "New Blockchain Tool Promises Verifiable Audits in 30 Seconds",
    "img": "https://static.coindesk.com/wp-content/uploads/2016/01/ledgers-e1452879299106-200x135.jpg",
    "p": "A new blockchain-based system speeds up audits but doesn't replace accountants."
  },
{
    "title": "Regulated ETH Futures? Not So Fast",
    "img": "https://static.coindesk.com/wp-content/uploads/2019/05/eth-200x135.jpg",
    "p": "In spite of CFTC Chairman Tarbert’s comments, Noelle Acheson argues that it’s unlikely that we see regulated ether futures any time soon, if ever."
  }

];

// db.Article
//   .remove({})
//   .then(() => db.Article.collection.insertMany(articleSeed))
//   .then(data => {
//     console.log(data.result.n + "records inserted!")
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
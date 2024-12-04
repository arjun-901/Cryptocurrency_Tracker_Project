import React, { useState } from 'react';
import './Blog.css';

const cryptocurrencies = [
  {
    name: "Understanding Cryptocurrency",
    description: `
      Cryptocurrency has revolutionized the financial world as a digital or virtual currency secured by cryptography. Unlike traditional currencies, it operates on a decentralized network called blockchain technology.

      Key Features:
      • Decentralization: No central authority control
      • Security: Advanced cryptographic protection
      • Transparency: Public ledger tracking all transactions
      • Global Access: Available worldwide 24/7

      Popular Cryptocurrencies:
      1. Bitcoin (BTC)
      - The pioneer cryptocurrency
      - Created in 2009 by Satoshi Nakamoto
      - Largest market capitalization
      
      2. Ethereum (ETH)
      - Smart contract platform
      - Powers decentralized applications (DApps)
      - Second-largest cryptocurrency
      
      3. Binance Coin (BNB)
      - Native token of Binance exchange
      - Used for trading, payment of fees
      - Powers the Binance Smart Chain

      4. Solana (SOL)
      - High-performance blockchain
      - Fast transaction processing
      - Low transaction costs

      5. Cardano (ADA)
      - Sustainable blockchain platform
      - Peer-reviewed research approach
      - Focus on scalability
    `
  },
  {
    name: "Investment Guide: Cryptocurrency",
    description: `
      Getting Started with Cryptocurrency Investment

      Essential Steps:
      1. Research & Education
      • Understand blockchain technology
      • Learn about different cryptocurrencies
      • Study market trends and patterns

      2. Risk Management
      • Only invest what you can afford to lose
      • Diversify your portfolio
      • Set clear investment goals

      3. Security Measures
      • Use secure cryptocurrency exchanges
      • Implement two-factor authentication
      • Consider hardware wallets for storage

      Investment Options:
      A. Direct Purchase
      - Buy and hold cryptocurrencies
      - Trading on exchanges
      - Dollar-cost averaging

      B. Indirect Investment
      - Cryptocurrency ETFs
      - Mining operations
      - Blockchain companies

      Important Considerations:
      • Market Volatility
      • Regulatory Environment
      • Technical Knowledge Required
      • Long-term vs Short-term Strategy
    `
  },
  {
    name: "Cryptocurrency Trading Strategies",
    description: `
      Effective Trading Approaches for Cryptocurrency Markets

      1. Day Trading
      • Focus on short-term price movements
      • Requires active market monitoring
      • Technical analysis skills needed

      2. HODL Strategy
      • Long-term investment approach
      • Less affected by short-term volatility
      • Focus on fundamental value

      3. Swing Trading
      • Capitalize on 'swings' in price trends
      • Medium-term holding periods
      • Balance between day trading and holding

      Risk Management Tools:
      • Stop-loss orders
      • Position sizing
      • Portfolio diversification
      • Regular profit taking

      Technical Analysis:
      • Chart patterns
      • Trading indicators
      • Volume analysis
      • Price action study

      Remember:
      - Always have a clear trading plan
      - Keep detailed trading records
      - Never trade with borrowed money
      - Stay informed about market news
    `
  },
  {
    name: "Blockchain Technology Fundamentals",
    description: `
      Understanding the Foundation of Cryptocurrency

      What is Blockchain?
      A decentralized, distributed ledger technology that records transactions across multiple computers securely and transparently.

      Key Components:
      1. Blocks
      • Contains transaction data
      • Timestamp information
      • Cryptographic hash of previous block

      2. Nodes
      • Network participants
      • Validate transactions
      • Maintain network security

      3. Consensus Mechanisms
      • Proof of Work (PoW)
      • Proof of Stake (PoS)
      • Delegated Proof of Stake (DPoS)

      Applications Beyond Cryptocurrency:
      • Smart Contracts
      • Supply Chain Management
      • Digital Identity
      • Healthcare Records
      • Voting Systems

      Benefits:
      • Transparency
      • Immutability
      • Decentralization
      • Enhanced Security
      • Reduced Costs
    `
  },
  {
    name: "Security Best Practices",
    description: `
      Protecting Your Cryptocurrency Investment

      Essential Security Measures:
      1. Wallet Security
      • Use hardware wallets for large amounts
      • Enable multi-signature protection
      • Regular backup of wallet data

      2. Exchange Security
      • Choose reputable exchanges
      • Enable 2FA authentication
      • Regular security audits
      • Limited funds on exchanges

      3. Personal Security
      • Strong, unique passwords
      • Secure internet connection
      • Updated software/systems
      • Phishing awareness

      Common Threats:
      • Phishing attacks
      • Malware
      • Social engineering
      • Fake websites
      • Compromised devices

      Recovery Planning:
      • Backup seed phrases
      • Multiple copies of keys
      • Secure storage locations
      • Emergency procedures
    `
  }
];

const CryptoPage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0]);

  const printDocument = () => {
    const printContent = document.getElementById('print-content').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  return (
    <div className="crypto-page">
      <div className="sidebar">
        <h2>Cryptocurrencies</h2>
        <ul>
          {cryptocurrencies.map((crypto, index) => (
            <li key={index} onClick={() => setSelectedCrypto(crypto)}>
              {crypto.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">

        <div id="print-content">
          <h2>{selectedCrypto.name}</h2>

          <p>{selectedCrypto.description.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}<br />
            </React.Fragment>

          ))}</p>
          <img src={selectedCrypto.img} alt="" />
        </div>
        <button className='print-button' onClick={printDocument}>Print Documentation</button>
      </div>
    </div>
  );
};

export default CryptoPage;

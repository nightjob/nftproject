function connectPhantom() {
  // 1 connect to phantom wallet
  // 2 fetchNftsByAddress, account store both assume an eth address right now. Must change

  // todo: typings for window object to contain phantom
  const phantom = (window as any).phantom.solana.connect();
}

export default connectPhantom;

import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // static method를 만든다
  // 무슨 뜻이냐면 method가 Block 클래수 안에 있고 클래스가 생성되지 않았어도 호출할 수 있는 method라는 의미.
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  "1234123412341234",
  "",
  "castle",
  152536
);

let blockchain: Block[] = [genesisBlock];

// getBlockchain은 array block을 리턴한다. 그리고 blockchain을 리턴한다.
const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

// 블록 생성 함수 만들기.
// 필요한 인수는 data
const createNewBlock = (data: string): Block => {
  // 일단 previous block을 가져온다.
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newtTimestamp: number = getNewTimestamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newtTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newtTimestamp
  );
  return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export {};

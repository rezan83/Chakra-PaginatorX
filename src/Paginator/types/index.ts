export interface IPaginatorProps {
  pagesCount: number;
  selectedPage: number;
  setSelectedPage: (num: number) => void;
}

export interface IPagerBtnsProps {
  pagesCount: number;
  selectedPage: number;
  chooseSelectedPage: (num: number) => void;
  pagerBtnsStyle: any;
}

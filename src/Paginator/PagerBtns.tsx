import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { IPagerBtnsProps } from './types';

const PagerBtns: FC<IPagerBtnsProps> = ({
  pagesCount,
  selectedPage,
  chooseSelectedPage,
  pagerBtnsStyle
}) => {
  let pagerBtns: JSX.Element[] = [];
  for (let thisPage = 0; thisPage < pagesCount; thisPage++) {
    // display only close to selected page
    const isDisplay = !(
      (thisPage < selectedPage + 2 && thisPage > selectedPage - 2) ||
      thisPage === 0 ||
      thisPage === pagesCount - 1
    )
      ? 'none'
      : 'inline-block';
    thisPage === pagesCount - 1 &&
      selectedPage < pagesCount - 4 &&
      pagerBtns.push(
        <Button className="page-spacer" sx={pagerBtnsStyle} size={'sm'} variant={'link'} key={pagesCount + thisPage}>
          {'...'}
        </Button>
      );
    pagerBtns.push(
      <Button
        className={`page-num ${selectedPage === thisPage ? 'page-active' : ''}`}
        sx={pagerBtnsStyle}
        display={isDisplay}
        size={'sm'}
        bg={selectedPage === thisPage ? 'blue.400' : ''}
        onClick={() => chooseSelectedPage(thisPage)}
        variant={'link'}
        key={thisPage}>
        {thisPage + 1}
      </Button>
    );
    thisPage === 0 &&
      selectedPage > 3 &&
      pagerBtns.push(
        <Button className="page-spacer" sx={pagerBtnsStyle} size={'sm'} variant={'link'} key={pagesCount + thisPage}>
          {'...'}
        </Button>
      );
  }

  return <>{pagerBtns}</>;
};

export default PagerBtns;

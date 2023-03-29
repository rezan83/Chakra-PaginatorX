import React, { FC } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, SimpleGrid } from '@chakra-ui/react';
import { IPaginatorProps } from './types';
import PagerBtns from './PagerBtns';



const Paginator: FC<IPaginatorProps> = ({ pagesCount, selectedPage, setSelectedPage }) => {
  const chooseSelectedPage = (num: number) => {
    setSelectedPage(num);
  };

  const changeSelectedPage = (num: number) => {
    const neuNum = selectedPage + num;
    if (neuNum < pagesCount && neuNum >= 0) {
      setSelectedPage(neuNum);
    }
  };
  const pagerBtnsStyle = {
    w: '1rem'
  };
  return (
    <SimpleGrid columns={11} m="0 auto" w="fit-content">
      <Button className="page-start" sx={pagerBtnsStyle} onClick={() => chooseSelectedPage(0)}>
        <ArrowLeftIcon />
      </Button>
      <Button className="page-prev" sx={pagerBtnsStyle} onClick={() => changeSelectedPage(-1)}>
        <ChevronLeftIcon />
      </Button>

      <PagerBtns
        pagesCount={pagesCount}
        selectedPage={selectedPage}
        chooseSelectedPage={chooseSelectedPage}
        pagerBtnsStyle={pagerBtnsStyle}
      />

      <Button className="page-next" sx={pagerBtnsStyle} onClick={() => changeSelectedPage(1)}>
        <ChevronRightIcon />
      </Button>
      <Button className="page-last" sx={pagerBtnsStyle} onClick={() => chooseSelectedPage(pagesCount - 1)}>
        <ArrowRightIcon />
      </Button>
    </SimpleGrid>
  );
};

export default Paginator;
